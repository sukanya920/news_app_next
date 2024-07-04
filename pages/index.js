/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import Single_Post from "../components/Single_Post";
import Single_Post_Big from "../components/Single_Post_Big";

/* eslint-disable @next/next/no-img-element */

export const getStaticProps = async () => {
  const api_key = `82008ae0b1ec409faf0b523d31324c91`;
  const news_category = `business`;
  const news_contry = `in`;
  let api_link = ``;
  api_link = `https://newsapi.org/v2/top-headlines?country=${news_contry}&category=${news_category}&apiKey=${api_key}`;
  const res = await fetch(api_link);
  const data = await res.json();
  return {
    props: {
      data: data.articles,
    },
  }
}
const fullDate  = (getdate) => {
  let date = new Date(getdate);
  let day = date.getDate();
  let month = date.toLocaleString('default', { month: 'long' });
  let year = date.getFullYear();
  return ( `${day} ${month} ${year}` );
}

export default function Home({data}) {
  const firstElm = data[0];
  if(data){
    return (
      <>
        <section className="blog-post-area">
          <div className="container">
            <div className="row">
              <div className="blog-post-area-style">
                  <div className="col-md-12 col-12">
                    <Single_Post_Big
                    from = {firstElm.source.name ? firstElm.source.name : "No Name Found"}
                    title = {firstElm.title ? firstElm.title : "No Title Found"} 
                    imageUrl = {firstElm.urlToImage ? firstElm.urlToImage : "img/no_img_01.jpg"} 
                    desc = {firstElm.description ? firstElm.description : "No Description Found"} 
                    author = {firstElm.author ? firstElm.author : "No Author Found"}
                    date = {fullDate(firstElm.publishedAt)}
                    url = {firstElm.url}
                    />
                  </div>

                  {data.slice(1, 19).map((currElm) => {
                    return (
                      <div key={currElm.url} className="col-lg-4 col-md-6 col-12">
                        <Single_Post 
                        from = {currElm.source.name ? currElm.source.name : "No Name Found"}
                        title = {currElm.title? currElm.title.slice(0, 65) + '...' : "No Title Found"} 
                        imageUrl = {currElm.urlToImage ? currElm.urlToImage : "img/no_img_01.jpg"} 
                        desc = {currElm.description ? currElm.description.slice(0, 110) + '...' : "No Description Found"} 
                        author = {currElm.author ? currElm.author : "No Author Found"}
                        date = {fullDate(currElm.publishedAt)}
                        url = {currElm.url}
                        />
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }else{
    <div className="">No Data Found</div>
  }
}
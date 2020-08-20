import React from 'react';




const SBHeader = ({title}) => {
    return (
      <h1 className="smallBanners__container-title">{title}</h1>
    );
};


const SBImage = ({klas,img,imgClass }) => {
    return (
        <div className="img_conteiner">
            <img className= {imgClass} src={img}/>
            <div className={klas}/>
        </div>
    );
};


const SBText = ({text}) => {
    return (
      <p className="smallBanners__container-text">{text}</p>
    );
};


const SmallBaner = ({items=[]}) => {
    return (
      <>
        <div className="smallBanners__container">
          <SBImage klas={items[0].klas} img={items[0].imageUrl} imgClass={items[0].id}/>
          <SBHeader title={items[0].title} />
          <SBText text={items[0].text} />
        </div>
        <div className="smallBanners__container">
          <SBImage klas={items[1].klas} img={items[1].imageUrl} imgClass={items[1].id} />
          <SBHeader title={items[1].title} />
          <SBText text={items[0].text} />
        </div>
        <div className="smallBanners__container">
          <SBHeader title={items[2].title} />
          <SBText text={items[0].text} />
          <SBImage klas={items[2].klas} img={items[2].imageUrl} imgClass={items[2].id} />
        </div>
      </>
    );
};



// const SmallBanerComponent = ({image,title}) => {
    
//     return (
//       <div>
//         <img src={image} />
//         <h1>{title}</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam.
//         </p>
//       </div>
//     );
// };
// const SmallBannerTrumpet = ({title,image}) => (
//   <div>
//     <h1>{title}</h1>
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//       veniam.
//     </p>
//     <div>
//         <img src={image} />
//     </div>
    
//   </div>
// );

// const SmallBaner = ({ items = [],src,title}) => {
//     return (
//       <>
//         {items.map((el) => (
//           <SmallBanerComponent
//             key={el.id}
//             title={el.title}
//             image={el.imageUrl}
//           />
//         ))}
//         <SmallBannerTrumpet title={title} image= {src} />
       
//       </>
//     );
// };

export default SmallBaner;

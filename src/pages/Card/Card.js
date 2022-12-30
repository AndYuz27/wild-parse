const Card = (fn) =>{

    return(
         <div className="card_prod"> 
                    <img className="img_crd" src={`https://basket-10.wb.ru/vol${fn.prod.id.toString().substring(0, 4)}/part${fn.prod.id.toString().substring(0, 6)}/${fn.prod.id}/images/c516x688/1.jpg`} alt="image product" />
                    <div className="descr">
                        <h4>{fn.prod.sale_price}</h4><h5 className="nnn">{fn.prod.price}</h5>
                        <p className="title_prod">{fn.prod.name_prod}</p>
                        <p>{fn.prod.rating}/5 </p>
                        <a href={fn.prod.link} target="_blank">ссылка на товар</a>
                        {/* <p className="devilery_prod">Доставка <b>завтра</b></p> */}
                    </div>
                </div>
    )
}

/*
{{`${data.image !== undefined ? data.image : "https://velaxom.ru/assets/images/rasprodazha/kessler-parts/no-image.png"}} */


export default Card
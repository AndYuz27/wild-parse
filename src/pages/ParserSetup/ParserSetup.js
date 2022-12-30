import {useEffect, useState} from "react";

const ParserSetup = () =>{

 const [data, setData] = useState({
  url:"",
  min_price:"",
  max_price:"",
 })


 const {url, min_price, max_price} = data

 const onChange = e => {
  setData({...data,[e.target.name]:[e.target.value]})
 }
 const onSubHandler = e =>{
  e.preventDefault();
  console.log(data)
  console.log(data.url[0])
  console.log(data.min_price[0])
  console.log(data.max_price[0])

fetch(`https://parse-wild.andrieiiuzlov.repl.co/txt?url=${data.url[0]}&min_price=${data.min_price[0]}&max_price=${data.max_price[0]}`)
  .then(response => response.json())
  .then(data => {console.log(data)
  //  alert(data.message)
   alert("Данные обновлены")
  });
 }



    return (
        <div className="PSetup">
            <h3>Parse Setup</h3>
            <form onSubmit={onSubHandler}>
  <label>
   <b> Url католога:</b>    https://www.wildberries.ru/catalog/
    <input className="url-inp" type="text" name="url" value={url} onChange={onChange} placeholder="elektronika/igry-i-razvlecheniya/aksessuary/garnitury"/>
  </label>
  <br></br>

  <label>
    <b>Минимальный ценик:</b>
    <input className="prc_inp" type="number" name="min_price" value={min_price} onChange={onChange} />
  </label>
  <br></br>
  <label>
  <b>Максимальный ценик:</b>
    <input className="prc_inp" type="number" name="max_price" value={max_price} onChange={onChange}/>
  </label>
<br></br>
  <input className="sub_inp" type="submit" value="Обновить" />
</form>
        </div>
    )
}

export default ParserSetup
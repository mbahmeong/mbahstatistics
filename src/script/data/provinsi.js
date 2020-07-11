// link api
const url = "https://indonesia-covid-19.mathdro.id/api/provinsi";

class Provinsi extends HTMLElement {

  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: "open"})
  }

  connectedCallback() {
    this.data()
  }

  data(){
      fetch(url)
        .then(res => res.json())
        .then(res => {
          for(let i = 0; i < 35; i++){
            if(res.data[i].provinsi === "Indonesia"){
              // Provinsi Indonesia ngga ada
            }else{
              this.render(res.data[i])
            }
          }
        })
        .catch(error => console.log(error))
  }

  render(data){
    this.shadowDOM.innerHTML +=
    `
    <style>
    :host{
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
    }
    data{
      width: 25%;
      padding: 18px;
      display: block;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      margin: 1%;
      background:#fff;
      border-radius: 6px;
    }
    @media(max-width: 1080px){
      data{width:40%}
    }
    @media(max-width: 600px){
      data{width:98%}
    }
    h2{
      font-size: 24px;
      line-height: 35px;
      margin: 16px 0;
      padding:0;
    }
    ul{
      list-style: none;
      padding: 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
    }
    ul li{
      display: inline-block;
      padding: 20px;
      margin: 12px 12px 0px 0;
      border-radius: 6px;
      background: #eee;
      border: 1px solid #e5e5e5;
    }
    @media(max-width: 400px){
      ul li{padding: 12px;margin-right: 8px;font-size: 15px}
    }
    @media(max-width: 350px){
      ul li{padding: 8px;margin-right: 8px;font-size: 12px}
    }
    </style>

    <data>
    <h2>
    ${data.provinsi}
    </h2>
    <ul>
    <li>Positif: ${data.kasusPosi}</li>
    <li>Sembuh: ${data.kasusSemb}</li>
    <li>Meninggal: ${data.kasusMeni}</li>
    </ul>
    </data>
    `
    data = this.shadowDOM.querySelector("data")
  }
}

customElements.define('data-prov', Provinsi);
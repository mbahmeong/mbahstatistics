// link api
const url = "https://indonesia-covid-19.mathdro.id/api";

class Indonesia extends HTMLElement {

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
              this.render(res)
        })
        .catch(error => alert(error))
  }

  render(data){
    this.shadowDOM.innerHTML =
    `
    <style>
    :host{
      border-radius: 6px;
      display: block;
      padding: 18px;
      max-width: 720px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      margin: 20px auto;
      background:#fff;
    }
    @media(max-width: 1080px){
      :host{
        max-width: 90%;
      }
    }
    @media(max-width: 725px){
      :host{
        margin-top: 40px;
      }
    }
    h2{
      font-size: 24px;
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

    <h2>Indonesia</h2>
    <ul>
    <li>Positif: ${data.jumlahKasus}</li>
    <li>Dirawat: ${data.perawatan}</li>
    <li>Sembuh: ${data.sembuh}</li>
    <li>Meninggal: ${data.meninggal}</li>
    </ul>
    `
  }
}

customElements.define('data-indo', Indonesia);
import { adatLeiras } from "./adat.js";
class UrlapView {
  #formAdat;
  constructor(szuloElem) {
    console.log("view");
    szuloElem.append("<form>");
    this.formElem = szuloElem.find("form");
    console.log(this.formElem);
    this.htmlOsszeallit();

    this.submitElem = this.formElem.find("#submit");
    console.log(this.submitElem);
    this.cimElem = this.formElem.find("#cim");
    this.szerzoElem = this.formElem.find("#szerzo");
    this.#formAdat = {};
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#formAdat.szerzo = this.szerzoElem.val();
      this.#formAdat.cim = this.cimElem.val();

      console.log(this.#formAdat);
      this.trigger("ujAdatHozzaAdasa");
    });
  }
  trigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this.#formAdat });
    window.dispatchEvent(e);
  }
  htmlOsszeallit() {
    let txt = "";
    for (const key in adatLeiras) {
        switch (adatLeiras[key].tipus) {
            case "text":
            txt+=this.txturlapElem(adatLeiras[key], key)
                break;
           /*  case "number":
                txt+=this.txturlapElem(adatLeiras[key], key)  // ezt nem így, numberre átírni!
                break; */
            default:
                break;
        }
     
    }

    txt += `<div class="mb_3 mt-3">
        
        <input type="submit" class="submit" id="submit"
       value="küld"
        cim="szerzo">
       
        </div>`;
    this.formElem.append(txt);
  }
  txturlapElem(obj, key){
    let txt = `<div class="mb_3">
    <label for="${key}" class="form-label">${obj.megjelenes}</label>
    <input type="${obj.tipus}" class="form-control" id="${key}"
    placeholder="${obj.placeholder}"
    pattern="${obj.pattern}"
    value="${obj.value}"
   required="${obj.required}"
    cim="${key}">
   
    </div>`;
  }
}
export default UrlapView;

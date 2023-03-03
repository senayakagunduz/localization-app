import "./App.css";
import { useState,useEffect } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = { 
  "tr-TR": {
    title:"Merhaba Dünya",
    description:`${count} Yeni mesajınız var`,
  },
   "en-US":{
    title:"Hello World",
    description:`You have ${count} new messages`,
  },
}; 
function App() {
  const isLocale=localStorage.getItem('locale'); 
  const defaultLocale=isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale); 

  useEffect(()=>{
    localStorage.setItem("locale",locale) //locale key'ine local value'sunu atadık
  },[locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" values={{count:5}}/>
        <p>
        <FormattedMessage id="description"/>
        </p>
          <br />
          <br />
          <button onClick={()=>setLocale('tr-TR')} type="button">TR</button>
          <button onClick={()=>setLocale('en-US')} type="button">EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;

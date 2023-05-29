import {FC} from 'react'
import { useTranslation } from 'react-i18next'
const MainPage:FC =()=> {
  const {t}=useTranslation("main");

  return (
    <div>
      {t("main_page_title")}
      gg
      </div>
  )
}

export default MainPage
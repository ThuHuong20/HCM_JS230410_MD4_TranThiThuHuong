import './main.scss'
import RouteSetup from '@routes/RouteSetup'
import './i18n/config';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <>
      thu: {t('hello',)} {t('about',)}
      {/* Routing */}
      <RouteSetup/>
    </>
  )
}

export default App

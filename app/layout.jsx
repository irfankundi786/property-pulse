import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang='en'>
          <head>
            <script
              src='https://cdn.botpress.cloud/webchat/v3.0/inject.js'
              defer
            ></script>
            <script
              src='https://files.bpcontent.cloud/2024/12/09/05/20241209050719-K65NM8FK.js'
              defer
            ></script>
          </head>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />

            <script
              src='https://cdn.botpress.cloud/webchat/v3.0/inject.js'
              defer
            ></script>

            <script
              src='https://cdn.botpress.cloud/webchat/v3.0/inject.js'
              defer
            ></script>
            <script
              src='https://files.bpcontent.cloud/2024/12/09/05/20241209050719-K65NM8FK.js'
              defer
            ></script>
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};
export default MainLayout;

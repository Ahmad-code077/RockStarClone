import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeMain from './layout/HomeMain';
import Hero from './component/Hero';
import CardContent from './component/CardContent';
import GamesShowCase from './page/GamesShowCase';
import AdminGames from './page/AdminGames';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeMain />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <div className='max-w-6xl  mx-auto px-4'>
              <CardContent />
              <GamesShowCase />
            </div>
          </>
        ),
      },
      {
        path: '/admin',
        element: (
          <div className='max-w-6xl  mx-auto px-4'>
            <AdminGames />,
          </div>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};
export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeMain from './layout/HomeMain';
import Hero from './component/Hero';
import CardContent from './component/CardContent';
import Banner from './component/Banner';
import GamesShowCase from './page/GamesShowCase';
import AdminGames from './page/AdminGames';
import AllGames from './page/AllGames';
import SeeSingleGameCard from './page/SeeSingleGameCard';
import About from './page/About';
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
            <Banner />
          </>
        ),
      },
      {
        path: '/admin',
        element: (
          <div className='max-w-6xl  mx-auto px-4'>
            <AdminGames />
          </div>
        ),
      },
      {
        path: '/games',
        element: <AllGames />,
      },
      {
        path: '/games/:id',
        element: <SeeSingleGameCard />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};
export default App;

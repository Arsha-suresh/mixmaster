import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {About,Home, Cocktail, Error, Landing,NewsLetter, SinglePageError} from './pages'
import { loader  as loaderLanding} from "./pages/Landing";
import { loader as cockTailPageLoader } from "./pages/Cocktail";
import { action as newletterAction} from "./pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60*5
    }
  }
});

const route = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>,
  
    children:[
      {
        index:true,
        loader:loaderLanding(queryClient),
        element:<Landing/>,
        errorElement:<SinglePageError/>
      },
      {
        path:'about',
        element:<About/>
      },
      
      {
        path:'cocktail/:id',
        element: <Cocktail/>,
        errorElement:SinglePageError,
        loader:cockTailPageLoader(queryClient)
      },
      {
        path:'news',
        element:<NewsLetter/>,
        action: newletterAction
      }
      
    ]
  },
  
]
);

const App = () => {

  return <QueryClientProvider client={queryClient}>
  <RouterProvider router={route} />;
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
};
export default App;

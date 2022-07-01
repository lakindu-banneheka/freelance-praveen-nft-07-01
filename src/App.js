import './App.css';
import Home from './Pages/Home/Home';
import { useState } from 'react';
import StakingDapp from './Pages/StakingDapp/StakingDapp';
import Claim from './Pages/Claim/Claim';

export const Routes = {
  HOME: 'HOME',
  STAKE: 'STAKE',
  UNSTAKE: 'UNSTAKE',
  CLAIM: 'CLAIM'
}


function App() {
  const [route, setRoute] = useState(Routes.HOME);

  // all routes => 'home', 'stake', 'unstake', 'claim'


  return (
    <div className="App" >
      { route === Routes.HOME
        ?<Home 
          setRoute={setRoute}
          route={route}
        />
        :( route === Routes.STAKE
          ?<StakingDapp 
            setRoute={setRoute}
            route={route}
          />
          :(route === Routes.UNSTAKE
            ?<StakingDapp 
              setRoute={setRoute}
              route={route}
            />
            :(route === Routes.CLAIM
              ?<Claim 
                setRoute={setRoute}
                route={route}
              />
              :(<></>)
            )
          )
        )
      }
    </div>
  );
}

export default App;

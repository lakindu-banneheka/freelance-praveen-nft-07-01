import './App.css';
import Home from './Pages/Home/Home';
import { useState } from 'react';
import StakingDapp from './Pages/StakingDapp/StakingDapp';
import Claim from './Pages/Claim/Claim';

// img
import img_01 from './assets/images/img-1.png';


export const Routes = {
  HOME: 'HOME',
  STAKE: 'STAKE',
  UNSTAKE: 'UNSTAKE',
  CLAIM: 'CLAIM'
}


function App() {
  const [route, setRoute] = useState(Routes.HOME);
  const [stakeId,setStakeId] = useState(null);
  const [unstakeId,setUnstakeId] = useState(null);
  const [stake,setStake] =  useState([
    {image:img_01, id:'1'},
    // {image:img_01, id:'3'},
    // {image:img_01, id:'4'},
    // {image:img_01, id:'5'},
    // {image:img_01, id:'6'},
    // {image:img_01, id:'7'},
    // {image:img_01, id:'8'}
]);
const [unstake,setUnstake] =  useState([
    {image:img_01, id:'12'},
    {image:img_01, id:'13'},
    {image:img_01, id:'14'},
    {image:img_01, id:'15'},
    {image:img_01, id:'16'},
    {image:img_01, id:'17'},
    {image:img_01, id:'18'}
]);

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
            selectedId={stakeId}
            setSelectedId={setStakeId}
            data={stake}
          />
          :(route === Routes.UNSTAKE
            ?<StakingDapp 
              setRoute={setRoute}
              route={route}
              selectedId={unstakeId}
              setSelectedId={setUnstakeId}
              data={unstake}
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

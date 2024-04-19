import React from 'react';
import './HandCricket.css';
import { PersonCircle } from 'react-bootstrap-icons'
import ones from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'
import head from '../assets/head.jpg'
import tail from '../assets/tail.jpg'
import bat from '../assets/bat.jpg'
import bowl from '../assets/bowl.jpg'

export default class HandCricket extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={player:[],comp:[],fb:[],finish:[]};
    }

    componentDidMount() 
    {
        this.setForGame();
    }

    setForGame()
    {
        const player=[];
        const comp=[];
        const fb=[]
        const finish=[]
        comp.push(0);
        player.push(0);
        fb.push(0);
        finish.push(0);
        this.setState({player,comp,fb,finish});
    }

    batfirst(c)
    {
        const {player,comp,fb,finish}=this.state;
        var co=randomin(1,6);
        const a=document.getElementById('a');
        const b=document.getElementById('b');
        a.innerHTML=c;
        b.innerHTML=co;
        if(co===c)
        {
            finish[0]=1;
            const st=document.getElementById('status');
            st.innerHTML='Status : Bowling';
            const z=document.getElementById('defend');
            z.style.display='inline-block';
            const y=document.getElementById('gamePlay');
            const x=document.getElementById('OUT');
            const h=document.getElementById('head');
            h.style.display='inline-block';
            y.style.display='none';
            x.style.display='inline-block';
        }
        else
        {
            player[0]+=c;
        }
        this.setState({player,comp,fb,finish});
    }

    batsecond(c)
    {
        const st=document.getElementById('status');
        st.innerHTML='Status : Batting';
        const {player,comp,fb,finish}=this.state;
        var co=randomin(1,6);
        const a=document.getElementById('a');
        const b=document.getElementById('b');
        a.innerHTML=c;
        b.innerHTML=co;
        if(co===c)
        {
            if(player[0]===comp[0])
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('tie');
                const h=document.getElementById('head');
                h.style.display='inline-block';
                y.style.display='none';
                x.style.display='inline-block';
            }
            else
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('chaseloss');
                const h=document.getElementById('head');
                h.style.display='inline-block';
                y.style.display='none';
                x.style.display='inline-block';
            }
        }
        else
        {
            player[0]+=c;
            if(player[0]>comp[0])
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('chasewin');
                const h=document.getElementById('head');
                h.style.display='inline-block';
                y.style.display='none';
                x.style.display='inline-block';
            }
        }
        this.setState({player,comp,fb,finish});
    }

    bowlfirst(c)
    {
        const {player,comp,fb,finish}=this.state;
        var co=randomin(1,6);
        const a=document.getElementById('a');
        const b=document.getElementById('b');
        a.innerHTML=c;
        b.innerHTML=co;
        if(co===c)
        {
            finish[0]=1;
            const st=document.getElementById('status');
            st.innerHTML='Status : Batting';
            const z=document.getElementById('chase');
            z.style.display='inline-block';
            const y=document.getElementById('gamePlay');
            const x=document.getElementById('OUT');
            const h=document.getElementById('head');
            h.style.display='inline-block';
            y.style.display='none';
            x.style.display='inline-block';
        }
        else
        {
            comp[0]=comp[0]+co;
        }
        this.setState({player,comp,fb,finish});
    }

    bowlsecond(c)
    {
        const st=document.getElementById('status');
        st.innerHTML='Status : Bowling';
        const {player,comp,fb,finish}=this.state;
        var co=randomin(1,6);
        const a=document.getElementById('a');
        const b=document.getElementById('b');
        a.innerHTML=c;
        b.innerHTML=co;
        if(co===c)
        {
            if(player[0]===comp[0])
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('tie');
                const h=document.getElementById('head');
                h.style.display='inline-block';
                y.style.display='none';
                x.style.display='inline-block';
            }
            else
            {
                
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('defendwin');
                const h=document.getElementById('head');
                h.style.display='inline-block';
                y.style.display='none';
                x.style.display='inline-block';
            }
        }
        else
        {
            comp[0]+=co;
            if(comp[0]>player[0])
            {
                const y=document.getElementById('gamePlay');
                const x=document.getElementById('defendloss');
                const h=document.getElementById('head');
                h.style.display='inline-block';
                y.style.display='none';
                x.style.display='inline-block';
            }
        }
        this.setState({player,comp,fb,finish});
    }

    toss(x)
    {
        var t=randomin(0,1);
        const c=document.getElementById('toss');
        c.style.display='none';
        if(t===x)
        {
            const s=document.getElementById('startgame');
            s.style.display='inline-block';
        }
        else
        {
            var b=randomin(0,1);
            if(b===0)
            {
                const s=document.getElementById('startgamebat');
                s.style.display='inline-block';
            }
            else
            {
                const s=document.getElementById('startgamebowl');
                s.style.display='inline-block';
            }
        }
    }

    chose(c)
    {
        const {player,comp,fb,finish}=this.state;
        if(fb[0]===1)
        {
            console.log("batfirst");
            if(finish[0]===0)
            {
                this.batfirst(c);
            }
            else
            {
                this.bowlsecond(c);
            }
        }
        else
        {
            console.log("bowlfirst");
            if(finish[0]===0)
            {
                this.bowlfirst(c);
            }
            else
            {
                this.batsecond(c);
            }
        }
    }

    bob(x)
    {
        const {player,comp,fb,finish}=this.state;
        const c=document.getElementById('startgame');
        c.style.display='none';
        const d=document.getElementById('startgamebat');
        d.style.display='none';
        const e=document.getElementById('startgamebowl');
        e.style.display='none';
        const h=document.getElementById('head');
        h.style.display='none';
        const g=document.getElementById('gamePlay');
        g.style.display='inline-block'
        if(x===0)
        {
            const st=document.getElementById('status');
            st.innerHTML='Status : Batting';
            fb[0]=1;
            finish[0]=0;
            this.setState({player,comp,fb,finish});
        }
        else
        {
            const st=document.getElementById('status');
            st.innerHTML='Status : Bowling';
            fb[0]=0;
            finish[0]=0;
            this.setState({player,comp,fb,finish});
        }
        this.setState({player,comp,fb,finish});
    }

    continuegame()
    {
        const x=document.getElementById('gamePlay');
        const y=document.getElementById('OUT');
        const h=document.getElementById('head');
        h.style.display='none';
        y.style.display='none';
        x.style.display='inline-block';
    }

    render()
    {
        const {player,comp,fb,finish}=this.state;
        return(
            <div id="surface">
                <div id="head"><h2 className='title'>Hand Cricket</h2></div>
                <div id="toss">
                <h2>Let's Play</h2>
                <br></br>
                <img src={head} className="Coins" onClick={()=>this.toss(0)}/>
                <img src={tail} className="Coins" onClick={()=>this.toss(1)}/>
                </div>
                <div id="startgame">
                <h2>YOU HAVE WON THE TOSS</h2>
                <br></br>
                <img src={bat} className="Coin" onClick={()=>this.bob(0)}/>
                <img src={bowl} className="Coin" onClick={()=>this.bob(1)}/>
                </div>
                <div id="startgamebat">
                <br></br>
                <h2>THE COMPUTER HAS WON THE TOSS AND ELECTED TO BAT</h2>
                <br></br>
                <button className="Coin" onClick={()=>this.bob(1)}>GO</button>
                </div>
                <div id="startgamebowl">
                <br></br>
                <h2>THE COMPUTER HAS WON THE TOSS AND ELECTED TO BOWL</h2>
                <br></br>
                <button className="Coin" onClick={()=>this.bob(0)}>GO</button>
                </div>
                <div id="gamePlay">                
                <div className="p">                <PersonCircle className='profile' />&nbsp;&nbsp;&nbsp;  {localStorage.getItem("name")}
<br></br><br></br>{player[0]}</div>
                <div className="p">COMPUTER<br></br><br></br>{comp[0]}</div>                <br></br>
                <br></br>
                <br></br>
                <div id="status">Status : </div>
                <br></br>
                <div id="defend"><br></br>COMPUTER NEEDS {player[0]-comp[0]+1} RUNS TO WIN<br></br><br></br></div>
                <div id="chase"><br></br>YOU NEED {comp[0]-player[0]+1} RUNS TO WIN<br></br><br></br></div>
                <br></br>
                <img src={ones} className='k'  onClick={()=>this.chose(1)}/>
                <img src={two} className="k" onClick={()=>this.chose(2)}/>
                <img src={three} className="k" onClick={()=>this.chose(3)}/>
                <img src={four} className="k" onClick={()=>this.chose(4)}/>
                <img src={five} className="k" onClick={()=>this.chose(5)}/>
                <img src={six} className="k" onClick={()=>this.chose(6)}/>
                <br></br>
                <br></br>
                <div className="choice">YOU HAVE CHOOSE<br></br><br></br><div id="a">0</div></div>
                <div className="choice">COMPUTER HAS CHOOSE<br></br><br></br><div id="b">0</div></div>
                </div>
                <div id="defendwin">
                <br></br>
                <br></br>
                YOU HAVE WON THE GAME BY {player[0]-comp[0]} RUNS
                <br></br>
                <br></br>
                <button className="NG" onClick={()=>NG()}>GO</button>
                </div>
                <div id="chasewin">
                <br></br>
                <br></br>
                YOU HAVE WON THE GAME
                <br></br>
                <br></br>
                <button className="NG" onClick={()=>NG()}>GO</button>
                </div>
                <div id="defendloss">
                <br></br>
                <br></br>
                THE COMPUTER HAS WON THE GAME
                <br></br>
                <br></br>
                <button className="NG" onClick={()=>NG()}>GO</button>
                </div>
                <div id="chaseloss">
                <br></br>
                <br></br>
                THE COMPUTER HAS WON THE GAME BY {comp[0]-player[0]} RUNS
                <br></br>
                <br></br>
                <button className="NG" onClick={()=>NG()}>GO</button>
                </div>
                <div id="tie">
                <br></br>
                <br></br>
                THE GAME HAS ENDED UP IN A TIE
                <br></br>
                <br></br>
                <button className="NG" onClick={()=>NG()}>GO</button>
                </div>
                <div id="OUT">
                <br></br>
                <br></br>
                OUT
                <br></br>
                <br></br>
                <button id="continue" onClick={()=>this.continuegame()}>GO</button>
                </div>
            </div>
        );
    }
}

function randomin(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function NG()
{
    window.location.reload();
}
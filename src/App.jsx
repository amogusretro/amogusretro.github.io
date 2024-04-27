import React from 'react'
import {motion as fm} from 'framer-motion'
const App = () => {
    return (
        <>
            <section>
                <div  className="bg-gradient-to-r from-red-500 to-green-500 flex items-center justify-center w-full h-9/12">
                    <fm.h1 initial={{opacity: 0, y:"-180px"}} animate={{opacity: 1, y: "0px"}} transition={{duration:3.5, type:"tween", ease:"linear"}} className="text-4xl font-extrabold m-12 p-12">AmogusRetro</fm.h1>
                </div>
                    <fm.div className="font-mono text-xs text-red-400 tracking-widest flex items-center justify-centerw-3/4" initial={{opacity: 0, x: "-100px"}} animate={{opacity: 1, x: "0px"}} transition={{duration: 4.5, type:"tween", delay: 3.5, ease:"linear"}}>
                        <div className="whitespace-pre-line">
                            You're in the right place to create retro games for GBA, NDS, PSP and more
                            <a className="hover:text-green-500 m-12" href="#">You can visit our News Flick to see last news!</a>
                        </div>
                    </fm.div>
                </section>
            <footer>
                <div className="flex items-center justify-center text-xs font-semibold bg-blue-500 hover:bg-blue-600">(C) By AmogusRetro</div>
            </footer>
        </>
    )
}

export default App
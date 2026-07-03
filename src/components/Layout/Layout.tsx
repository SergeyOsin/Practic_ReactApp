import {type PropsWithChildren} from 'react';
import {Header, Footer} from "./index"

export const Layout=({ children }: PropsWithChildren)=>{
    return(
            <div>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
    );
};

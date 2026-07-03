import {type PropsWithChildren} from 'react';
import {Header} from "../Header";
import {Footer} from "../Footer";

export const Layout=({ children }: PropsWithChildren)=>{
    return(
            <div>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
    );
};

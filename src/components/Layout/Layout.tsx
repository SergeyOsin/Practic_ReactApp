import {type PropsWithChildren} from 'react';
import {Header, Footer} from "./index.ts"

const Layout=({ children }: PropsWithChildren)=>{
    return(
            <div>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
    );
};

export default Layout;
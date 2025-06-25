import React, {ReactNode, CSSProperties} from 'react';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = ({}) => {
    return(
     <nav style={styles.main}>
        <h1>hi :)</h1>
     </nav>
    );
};


const styles: {main: CSSProperties} = {
    main:
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        outline: '2px solid black',
        textAlign: 'center' as CSSProperties['textAlign'],
    }
}

export default Footer;
import './MyLabel.css';


export interface Props {//para cambiar las props del control
   /**
    * Text to display
    */
   label: string;
   /**
    * Label size
    */
   size?:'normal' | 'h1' | 'h2' | 'h3'; //definidas en el cs
   /**
    * capitalize all label
    */
   allCaps?: boolean;
   /**
    * color
    */
   color?: 'text-primary' | 'text-secondary' | 'text-tertiary'; //que está en el css como primary, secondary.... ese color 
   /**
    * font color del texto del span
    */
   fontColor?: string;
}
export const MyLabel =({
   label,
   size ='normal',
   allCaps= false,
   color= 'text-primary',
   fontColor,
}: Props) =>{
 return (
    <span className={`${ size } ${ color } label`}
    style ={{ color: fontColor}}
    > {(allCaps)?label.toUpperCase(): label}
    </span>
 )
}
export const CopyIcon = ({
    width = 24,
    heigth = 24,
    color = "rgb(255,255,255)",
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={heigth}
        fill={color}
        viewBox="0 0 24 24"
      >
        <title>copy</title>
        <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
      </svg>
    );
  };
  
  export const CheckMark = ({
    width = 24,
    heigth = 24,
    color = "rgb(255,255,255)",
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={heigth}
        fill={color}
        viewBox="0 0 24 24"
      >
        <title>Copied</title>
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
      </svg>
    );
  };
  
  export const ArrowLeft = ({
    width = 24,
    heigth = 24,
    color = "rgb(255,255,255)",
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={heigth}
        fill={color}
      >
        <title>arrow-left-thin</title>
        <path d="M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z" />
      </svg>
    );
  };
  export const ArrowRight = ({
    width = 24,
    heigth = 24,
    color = "rgb(255,255,255)",
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={heigth}
        fill={color}
      >
        <title>arrow-right-thin</title>
        <path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" />
      </svg>
    );
  };
  
  export const Pause = ({
    width = 24,
    heigth = 24,
    color = "rgb(255,255,255)",
  }) => {
    return (
      <svg
        width={width}
        height={heigth}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>pause</title>
        <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
      </svg>
    );
  };
  
  export const Play = ({
    width = 24,
    heigth = 24,
    color = "rgb(255,255,255)",
  }) => {
    return (
      <svg
        width={width}
        height={heigth}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>play</title>
        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
      </svg>
    );
  };
  export const RestartIcon = ({
    width = 24,
    heigth = 24,
    color = "rgb(255,255,255)",
  }) => {
    return (
      <svg
        width={width}
        height={heigth}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>restart</title>
        <path d="M12,4C14.1,4 16.1,4.8 17.6,6.3C20.7,9.4 20.7,14.5 17.6,17.6C15.8,19.5 13.3,20.2 10.9,19.9L11.4,17.9C13.1,18.1 14.9,17.5 16.2,16.2C18.5,13.9 18.5,10.1 16.2,7.7C15.1,6.6 13.5,6 12,6V10.6L7,5.6L12,0.6V4M6.3,17.6C3.7,15 3.3,11 5.1,7.9L6.6,9.4C5.5,11.6 5.9,14.4 7.8,16.2C8.3,16.7 8.9,17.1 9.6,17.4L9,19.4C8,19 7.1,18.4 6.3,17.6Z" />
      </svg>
    );
  };
  export const InformationIcon = ({
    width = 24,
    heigth = 24,
    color = "rgb(255,255,255)",
    id = "",
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={heigth}
        fill={color}
        viewBox="0 0 24 24"
        id={id}
      >
        <path d="M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z" />
      </svg>
    );
  };
  export const LanguageSwitcherIcon = ({
    width = 24,
    heigth = 24,
    color = "rgb(255,255,255)",
  }) => {
    return (
      <svg
        width={width}
        height={heigth}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>web</title>
        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    );
  };
  export const CalcIcon = ({
    width = 24,
    heigth = 24,
    color = "rgb(255,255,255)",
  }) => {
    return (
      <svg
        width={width}
        height={heigth}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>calculator-variant-outline</title>
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M6.2 7.7H11.2V9.2H6.2V7.7M13 15.8H18V17.3H13V15.8M13 13.2H18V14.7H13V13.2M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18M14.1 10.9L15.5 9.5L16.9 10.9L18 9.9L16.6 8.5L18 7.1L16.9 6L15.5 7.4L14.1 6L13 7.1L14.4 8.5L13 9.9L14.1 10.9Z" />
      </svg>
    );
  };
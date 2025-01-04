const Icons = ({ icon, className }) => {
    const ICONS_LIST = {
        menuToggel: (
            <svg
                className="cursor-pointer"
                width="26"
                height="20"
                viewBox="0 0 26 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4 17.5V15H22V17.5H4ZM4 11.25V8.75H22V11.25H4ZM4 5V2.5H22V5H4Z"
                    fill="white"
                />
            </svg>
        ),
        circleCross: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#fff" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
            </svg>
        ),


    };
    return icon && ICONS_LIST[icon];
};

export default Icons;
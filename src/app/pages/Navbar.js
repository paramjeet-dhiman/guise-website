import { NavLink } from 'react-router-dom'


const MenuItems = [
    {
        label: 'Home',
        url: "/",
        active: true,
    },
    {
        label: 'Solutions',
        url: "/solutions",
        active: false,
    },
    {
        label: 'Contact',
        url: "/contact",
        active: false,
    },

];

export const Navbar = () => {

    return (
        <nav className={` bg-gray-900 shadow-xl  fixed inset-x-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-40`}>
            <div className="  mx-auto text-white">
                <div className="flex items-center justify-between h-16 px-10  sm:px-10 ">
                    <NavLink to="/" className="flex-shrink-0 flex items-center">
                        <svg height="30" viewBox="0 0 4421 724" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="4421" height="724" fill="url(#pattern0)" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0" transform="scale(0.000693963 0.00423758)" />
                                </pattern>
                                <image id="image0" width="1441" height="236" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaEAAADsCAMAAABaHpp0AAAAM1BMVEVMaXH////////////////////////////////////////////////////////////////x7/yuAAAAEHRSTlMA4GAw8BCgwIBA0CCwcJBQ9bb1bwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAHGtJREFUeJztndmW46oSRD2W53L9/9fe1UX3ud0VITtBIDJR7GclAhltI8aNEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEP25PM/n0+l0un65x/aszsZiXCCyFxfIG+eclT+aBHKCwHrcLufz/XQ6beGufch7gITLr+L4f1F+0vI3bsHtcjmnmtO27hxOp8/dbUYBIEVO8fO/nO9e3h0TUACKDJ2AcE6jt3f/+PCnsnmG3n8cIMUYhDH0/nn+OC39lK+7I2TECKTFKXr+t8edJuYZKARFhk5AOKfB27t/3H26bI6h9wHbzn+IYOj97rPbEz48IDs2ICVO/vM/7kJWNygHRYZOQDin9tv7/PT7XTbD0J+QWCC8G/pyXrzh/IPrHjJlAdLh5D7/sF9rUBKKDJ2AcE7Vt9d51So29DHAKM0LPBv65uSDawc5MwCpcPKe/yXu1xqUhSJDJyCcU+/tPe68j2qUGnofargGcWvo/dnPX98H5O49kAgn5/kH9rMM7drQx7P/L7NCQx+DC9qpoW8PX8/1E3L4FkiDY3/+t3ijg38D5aHI0AkI59R5eyP4udjQsbs4fBra41BYfkcHJMExP/9H1NlCv4ECUWToBIRzqry9IfxcaujQg4TfuDP0zeV4xSF7uBCS4Bif/y1yB8c3UCSKDJ2AcE6Ft/cSpRegyNB7SCYczgzttqs1+zlBChxburvgDWgZ2qmhj3G6zooMHb5h48zQnseTc/s5IAGO6fnH/1SToV0a+hnon7/E0NYfxzOODO17vs8W8vsaSIBjeP7HARoCMrRDQx8/IEHHlBg69uB6wo2h3c/HfEKWXwLxnPfPP/iE+z9AuSgydALCObPe3n2silVg6CMkEhAnhn76H6/InBQN8Zy3z38fvwv6GygYRYZOQDhnztsbbWyjwNA7SCQgLgwdYinGAbL9EojnvHv+owhahobIV0A4Z8bba33SbigwdKhenCkcGDpKd1ieFSCc8+b5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" />
                            </defs>
                        </svg>


                        {/* <svg height="30" viewBox="0 0 356 90" fill="none">
                        <rect width="356" height="90" fill="url(#pattern0)" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0" transform="translate(0 -0.172714) scale(0.00680272 0.0269085)" />
                            </pattern>
                            <image id="image0" width="147" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAAAyCAYAAABYpeleAAAEoUlEQVR4Ae1ai7HUMAx0CZRACczQACVQAiVQAh1QAiVQAiVQwiuBEmD2ON3T6WltJf4kdyPP3NiJZWu93sh2LqVkSgaSgWQgGUgGkoFkIBlIBpKBZCAZSAaSgWQgGUgGkoFk4IEY+FRK+VFK+V1K+Tv5B1+SfhFfUj8qj/qJ2llcnyfy9806u17j/gvhb8YcEhivt9+VUhiBMwChz2cSE0Q0e0I9MX1ZKCLRwatqnBKEtCISCRjJn0VM3xdNqCem1QEAc1dNPxeRISKS/BnE9HUhd6cXEyZUJnd1/uhier+Yu9OLCZttJiIsfQijs34fVLxk4VqZDClG/UTsatyB09G8YX9kE8M52rfuz2K4Xf8hYtJR42Y8scBIGe0y6idixx5CiAz70BUpgnMFjosPjxAAXJ1WkRL107Jj2wNE85WphXMlFneJA8DVaRUpUT8tOyYmb18zk8sWzpm+3/Sdken/ntES05okiMbjztvX2L5HXrdwjvTV7MsjBABXp1WkRP207DIyOQpJMe2LTExMeAu+avON6WyJ3pnyebdSTPvEhBlhJ2FMsH7tMW/2HlRMbI/gibF1D08v/svSadUTFvUTsWu9Z2rxUKvHqRD9W540Zyi3cLL6mm+vLnSw8BoCgE0jxXTx+fGeKDZoi6P3OuonYoc34Cw6ebzuvQdhYVn1Ugsnq9+K5dxiKqVogGzQHoE996J+onYr/7X3TootnKw+xdSjomtbRq7tOmqHdkcKqoWT1aeY7IzvuGbk2q6idtIOG27WZuvE1eyxrOrTIvMpuFh9zYdXp1cR6ftN7jUEAJvw9OH+nh/WfM+PBsg+gxl9KmLk2vFG7Ww74MW49vAkbRhfwiG+n5LUwglb6bcn95ZYwXDLBaDO4XRkYu9ktJhQ1hikjO+FRqYW+eIraif2o3NEH/aA4TQs6WicguOSy6Tp/AgxMcFp4u6A77yIkh+12wkj1AyCwvj13EgZJ0mkM+C8QvGBHiEmAGLH7FCIvY2oXoiSH7Wre+uvZZ8Ey6uCs+C8jFSUrvOjxMReAkJko/ZOUfKjdv1yqffAlv8UkwnZes8ESmufwSLcjxBUVCRRu7oU+msfPjLhNDEysf2QFRN8suiEyIkIhTb6aLwVZ1QkUbut/rfYY5xs6RcOGE6p3+Kv25aBHXmK2iImkMA2nbIUA7P8byUb0SgRjHzbPmpn2426BmfsFYE+lLCHD/eXC4qBkYmbmXuRCZOB5YyJfBYeK4KImGZhafWreVv59l1wWa5u1yxqSMOZuSblBuhaWC0o6/+sYsJDpiMOykc/eHfcHRWdamICQAiKhfrRIr8jJPj+ZjSGSH94+G3CZyqRtqNsrP+7a6ibPYmjAHj9tMQkIGE38+nD2G1ifGg7b0yz7mH8tW+bVi53mgNanj1pmmiQs2XzDMEDX2tzrn1Ey94knUlMWDkiXGEcM/ixPFIB2QpMGlSOAYDQGT/03fPOCMQCI8TVgw//fXlCAifsD1LNV4/vVltwhBN1REQaE8oYUy83NXzWX14nA8lAMpAMJAPJQDKQDCQDyUAykAwkA8lAMpAMJAPJQDJwDgb+AcWnFLnvfXXXAAAAAElFTkSuQmCC" className="text-white" />
                        </defs>
                    </svg> */}
                    </NavLink>

                    <div className=" space-x-4 hidden md:flex">

                        {
                            MenuItems.map((item, index) => (
                                <NavLink
                                    exact
                                    to={item.url}
                                    key={index}
                                    activeClassName="text-white border-b-4 border-blue-500 font-black  cursor-pointer"
                                    className={` text-gray-200  text-base px-3 py-2  hover:text-blue-500  font-semibold border-b-4  border-transparent hover:border-current cursor-pointer select-none`}
                                    aria-current="page"
                                >
                                    {item.label}
                                </NavLink>
                            ))
                        }

                    </div>
                </div>
            </div>
        </nav>
    )
}



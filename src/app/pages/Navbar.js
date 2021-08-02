import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className={`fixed bg-gray-100 w-full shadow-xl z-10`}>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <svg height="30" viewBox="0 0 356 90" fill="none">
                            <rect width="356" height="90" fill="url(#pattern0)" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0" transform="translate(0 -0.172714) scale(0.00680272 0.0269085)" />
                                </pattern>
                                <image id="image0" width="147" height="50" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAAAyCAYAAABYpeleAAAEoUlEQVR4Ae1ai7HUMAx0CZRACczQACVQAiVQAh1QAiVQAiVQwiuBEmD2ON3T6WltJf4kdyPP3NiJZWu93sh2LqVkSgaSgWQgGUgGkoFkIBlIBpKBZCAZSAaSgWQgGUgGkoFk4IEY+FRK+VFK+V1K+Tv5B1+SfhFfUj8qj/qJ2llcnyfy9806u17j/gvhb8YcEhivt9+VUhiBMwChz2cSE0Q0e0I9MX1ZKCLRwatqnBKEtCISCRjJn0VM3xdNqCem1QEAc1dNPxeRISKS/BnE9HUhd6cXEyZUJnd1/uhier+Yu9OLCZttJiIsfQijs34fVLxk4VqZDClG/UTsatyB09G8YX9kE8M52rfuz2K4Xf8hYtJR42Y8scBIGe0y6idixx5CiAz70BUpgnMFjosPjxAAXJ1WkRL107Jj2wNE85WphXMlFneJA8DVaRUpUT8tOyYmb18zk8sWzpm+3/Sdken/ntES05okiMbjztvX2L5HXrdwjvTV7MsjBABXp1WkRP207DIyOQpJMe2LTExMeAu+avON6WyJ3pnyebdSTPvEhBlhJ2FMsH7tMW/2HlRMbI/gibF1D08v/svSadUTFvUTsWu9Z2rxUKvHqRD9W540Zyi3cLL6mm+vLnSw8BoCgE0jxXTx+fGeKDZoi6P3OuonYoc34Cw6ebzuvQdhYVn1Ugsnq9+K5dxiKqVogGzQHoE996J+onYr/7X3TootnKw+xdSjomtbRq7tOmqHdkcKqoWT1aeY7IzvuGbk2q6idtIOG27WZuvE1eyxrOrTIvMpuFh9zYdXp1cR6ftN7jUEAJvw9OH+nh/WfM+PBsg+gxl9KmLk2vFG7Ww74MW49vAkbRhfwiG+n5LUwglb6bcn95ZYwXDLBaDO4XRkYu9ktJhQ1hikjO+FRqYW+eIraif2o3NEH/aA4TQs6WicguOSy6Tp/AgxMcFp4u6A77yIkh+12wkj1AyCwvj13EgZJ0mkM+C8QvGBHiEmAGLH7FCIvY2oXoiSH7Wre+uvZZ8Ey6uCs+C8jFSUrvOjxMReAkJko/ZOUfKjdv1yqffAlv8UkwnZes8ESmufwSLcjxBUVCRRu7oU+msfPjLhNDEysf2QFRN8suiEyIkIhTb6aLwVZ1QkUbut/rfYY5xs6RcOGE6p3+Kv25aBHXmK2iImkMA2nbIUA7P8byUb0SgRjHzbPmpn2426BmfsFYE+lLCHD/eXC4qBkYmbmXuRCZOB5YyJfBYeK4KImGZhafWreVv59l1wWa5u1yxqSMOZuSblBuhaWC0o6/+sYsJDpiMOykc/eHfcHRWdamICQAiKhfrRIr8jJPj+ZjSGSH94+G3CZyqRtqNsrP+7a6ibPYmjAHj9tMQkIGE38+nD2G1ifGg7b0yz7mH8tW+bVi53mgNanj1pmmiQs2XzDMEDX2tzrn1Ey94knUlMWDkiXGEcM/ixPFIB2QpMGlSOAYDQGT/03fPOCMQCI8TVgw//fXlCAifsD1LNV4/vVltwhBN1REQaE8oYUy83NXzWX14nA8lAMpAMJAPJQDKQDCQDyUAykAwkA8lAMpAMJAPJQDJwDgb+AcWnFLnvfXXXAAAAAElFTkSuQmCC" className="text-white" />
                            </defs>
                        </svg>
                    </Link>

                    <div className="flex space-x-4">
                        <Link to="/" className=" text-black text-base px-3 py-2  hover:text-green-500  font-medium border-b-4  border-transparent hover:border-current cursor-pointer select-none" aria-current="page">Home</Link>
                        <Link to="/solutions" className="text-black text-base hover:text-green-500 px-3 py-2  font-medium border-b-4  border-transparent hover:border-current cursor-pointer select-none ">Solutions</Link>
                        <Link to="/contact" className="text-black text-base hover:text-green-500 px-3 py-2  font-medium  border-b-4  border-transparent hover:border-current cursor-pointer select-none">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

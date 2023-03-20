import React, { useState } from 'react'
import "./Contact.css"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef=useRef()
  const [done,setDone]=useState(false)
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_ahwoiyw', 'template_5uelg3c', formRef.current, 'Z--zaw-wU9GAvYm5A')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">lets discuss your projects</h1>
                <div className="c-info"></div>
                <div className="c-info-item">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAADn5+c2Njb7+/vi4uL39/fx8fGVlZUzMzPo6Ojr6+uamprv7+/8/PyXl5ejo6MnJyfc3NxtbW1iYmLMzMxcXFwsLCwbGxtGRkbS0tKAgIC1tbVSUlI8PDx4eHgkJCQUFBSJiYmpqakQEBDDw8NfX19LS0tWVla7u7uNjY16enqwsLBwcHDWOIACAAAKhUlEQVR4nO1dZ3uzOgwNlJWQppmQvZrd9P//vZu8yDaZ9ZDBfi7nY1uoD5asYcmu1SpUqFChQoUKFSpUqGAWgvH5a93b7RY/0bH7WfZo0BEe+0snh+Hs2y17TJgYLzbOI5JpUPbAkDDuPaH3D6OzV/bgEBAvXvG7Yt8te3zKmD6TzzyiVtlDVIK3vuOzSuvDux/1wrJHqYCgn2My7Le3fhgGob9t9+p5bYzLHqc0vBzB2fTGBHqDX/a7ua2Gw9tRDsn48df+hP667hc/OgR41EjUj8//YjAif/FhJUW6yCQv9SykluTDQkFtk8H335mDtr2zuCVDn7y3d9ZSjJd8BHMU61YJaovYif7ff8tmsaF/YGhoEivI41l/W2g0/FU25JRP8CzURSKjW86/Z7NoiS6SdfTE/QSlaIdd9ObZaOcCz9ili2S0A5mHbKAYfmRDXYg9ZpEuwlCHonNhzSwGMIWR8JO2UISFdCiR87VEUHeiliIHZjQMduBcGKPcEBlFc3M34JH2JB+nFBNjc8UzMX/tAZTiGnNUiPDBnZHfkaAUpT+SXrRlTcXDK5wPMzPFEFU8SR7yg6SwmliDwkS4VBXSC7wkY7g0cT0dZGP7UXsLCaClbKpmgK2YKr4mAr/IQE0ENVT1K4NO9p4XufIykW0ppcrWGtZTjkxdwQCXLVF+UbySdt/1YqxuDQGwqyOUJigCUzT1OWdv+lJ/Ey5OCPY+Qzd7k2AmRD8y2dogBHdBtmbtTYswssCigzCs1uHfq+qmWcRsT1ckT/oSPSMX0yD9N6wDxruyTf6NYa7pZ1YqIxvf38BMhvEGbwHMdvhXhklpI1viJxjvyjzcpWErDThtGBmWYIQQaOLDx2MIKm2a6+3jSekA72NhwsVztSKcUBobsJb+qr+JbLKatkWDZw9BSEfqb8IFZNrUA2CyvYMQaOLC+0DySyGSNk5Ia7U9UmwBCdMdxphwkY1spepMkry+gTsXUNms2GEAywyGPqPjKxuaWv7IJ8X8xqWhLjgi2GkXKh1wHHhsjNXH1gBb73QMc7ozgNs2U3gDmUGMhJ0GeNl+g3xWv0EJnjHHhYgsQ+bIlsNQETXPmyE4Ka2CsfkESVpfboBMRM0lSBZTqdDchhmkGdOORAIpHtlAkO6KiS/1thAkTnNb9Dk7RPQKUETRMJ/NoHE7hvcIM0VciuWqw701BKkiCm0Ds15TCwiS7WmhmiHaM2Nkndc9wPkWcU3DlU0Ea7W5sL0420WQxPkC+XjQQhOr2J4CqihS7gAW2hfqRka8z9AC08adKINMOcJeQFEQrWWPrWMIYjrkDYNBSlPDtnvfoAXl+t+8D8AmhZG5teeAavsR77EsxOCb7nMzwNLBvdaExKWxxl7UfrIBc0f6kWPbLIpujgUH62ZxJDheloOyIbi4AlJuHe4o0bUhzZYH6SPlT2a4dcsogl8jUB7qW0YRPDGRjJRtggrdWSKJU8sElTTLiqQVLRNUOMhrKRL1MYo2GA1XZjrs0kWYRLGjFVybZtGHIyHFgiKrBJU0u4pV1/gWOXDkuC/BzUTXIorkOCzB4i2LjEYAjo1oObpFuniWnAt7jIYHOamNaCkfMxqmZ/pJlaFw5YI9ggoZG/GuUt+WWSQWQ7yz3hqjQU4qET9lwRoHjuzQi1c02yKosIvh1MX77Jigmk3xS1pObTEaASmVkai8t0RQiVGU2T5jFIWrrIoECaNk+qHs0MVgrzAPyrroBZ/xZxjoPbqA7NRIVaer6KI/nfT389VmmH7se9FA40F+9PgumXoLWV1sfNF6R8AmOWqbSlK4JtVeKqOLrW3feYbOSVP/O8ny82/u5yGui+PZU37/OEZ6ONJD6KUaRQQFNbi/GeUWqZ7jp8hOdirVuscElYPiOH1L8IK1jvorcsycM5O6Ocfln8XzDZnNaDG5IPm4+elexxGwLrlLQK7HnltQv3JE5s2tm62ercCf9nLXFqU6GnCpKsq1NHFSjBiL3fbONjSaS70U6deVaxpiTVFvKDKCs2f/JWiuyO87Gu7SapGLZ5Zy349DFynBzfcLdXfJeuCkGiiGJJAayVXp+X+tqFRKlq+NUkCvKOpoEFQS8Dt9Oe/pD6NBCdbfTg/ZbdAyi0fycslCxLcUKcG/bsiiFHXoIlUUyVjoDUU67r9vkGAUNQgqvYxM0nViRuPOxWUiymHNmaDiU6S+jeyJCe5zo0HHPOeKAnUKKrkcwtlI9tI2nhkNRpDTH9O53HRJJDWUfPcTo8F0kDuOp49IWud3GNDPJ5lWYBRBFwUWGQadgjol7x5JBqPMgTtdfIeALtAjoU/GZhGfIm1WO0i2IDAHbtlfULp8iwyDzlmkX/0gGYv6t/GeoA4S6LSL7HJEyeyX+0BRdAav0DmL1P/tS86ie5crlLuvVSdFeodnT3IW40OeYCK5aGlcbgJ6D6vs+W7BiRGMpFO9Gh041t8sO4u1uJmkq1W6a6ukQCnFOvpxsOw+5J58di+MY9WmN0oR5fDcGwTUC5eMiJFAKeKXYLF2oJ0ZFPEXVDaLSakNliS4POBf9M5msVyKxDxrODA1pLtE+zLPfSZpwJGGHY2QzmKp96ySfWod+1LMaHTKPKMN5BTlQPl7MNM/LPGoRDjmWc+ZqR5NwJV5oCc4ypoKd9imrdQ2OAoguaJwJOJbsD2j0o7w9rK8gbYLJ2hiQ8VJVcNCl18DoOkpZ1/SFZ2wPa7vTMrBilBMy7EaoIgaO+a7tIZiU8pp8262z694Ld5b+PTUNueE7wL/ibCAY2QCmrxxZsUrY5idL6v5xgmagnM6hfs3wBA/0r8FsxqFlwUXIaVXbFldT6/YkBHxApI//hFL9aaFSiqUNBXQwBIyR9xpFrimgoIUcnFmThn7xUX+SFeM8mHACig7RV1GCgsN/1F6aohzRcyLYq4mA8dYt7GgaOWKDDUV9d4BUmIFOoxbVirp/Oi3G5CK2hSZ8cuvqSvtnxZSfgXfC/q9yi2q2iLTfyC100X7it1cV8HmpHGV80ElksJjGi+34DhzbZk4b1/SFF4x3uc4Jnqif1q9XM7tvF4zV2PvTDS4HB7koJxhWZeC+kmO4jDCVseWakUoBqb5NphlE9U6snrQUm9bDCdOfh6/8MTJpcu1dMEEEgY37WidCKmvZ0ulQ7Z0CQ+t6TDPcfWD4QKwkpyDCVeAB7munitmqi2hA5a+LH8GM8Sn1Q3HeVPBePgL9qIfQwhe4N91T276R7nBfUa5j2XWWUaNyS1HpzMZCJOMTzmlLmcT4R3c9fCO5PL3KBDXBYNF/uGDeZeBXjhG9TuOzrDfHPN4AuFgfVuZGpWwRcKDcLq/53iR1wvLxpsBt/zz4q5JONEbdqqhO1k+knSc9HA6DrqNW9UM/PGx2X9ogZ6X6IlyIfx+2Xe/Wc73Sf/3Z7JeT3qH+dNvUf82x0a8RKvbHD0bPAfquA68TnQfDsDgwEHSjJYFd7p40oDxEnsVV6g0BOP2Lw/LZb/dNdQ+cCDoHqOk85pdZ9fcWqN8r+FdDcMiGdWHWX5nNUzn+90imo59EwIkRARh7F7QiD8De6WyQoUKFSpUqFChQoX/Cf4D89l7KT7fI+UAAAAASUVORK5CYII=" alt="" className="c-icon" />
                7994175369
                </div>
                <div className="c-info-item">
                  <img src="data:image/png;base64,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" alt="" className="c-icon" />
               <a href='https://github.com/Thoufeeqp'>Thoufeeq P</a>
                </div>
                <div className="c-info-item">
                  <img src="data:image/jpeg;base64,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" alt="" className="c-icon" />
                thoufeeqkoottil15@gmail.com
                </div>
                <div className="c-info-item">
                  <img src="data:image/png;base64,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" alt="" className="c-icon" />
                 <a href=" https://www.linkedin.com/in/thoufeeq-p-89bb03228/"> Thoufeeq P </a>
                </div>
            </div>
            <div className="c-right">
             
              <p className="c-desc">creating webpage layouts, writing code,editing website content, and making adjustments based on client feedback.</p>
            <form action='' ref={formRef} onSubmit={handleSubmit} >
              <input type="text" placeholder='Name' name='user_name'/>
              <input type="text" placeholder='Subject' name='user_subject'/>
              <input type="text" placeholder='Email' name='user_email'/>
           <textarea name="message" id=""  rows="5" placeholder='Message'></textarea>
            <button >Submit</button>
              {done && "Thank You"}
            </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
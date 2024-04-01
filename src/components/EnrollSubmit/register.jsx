import FormfacadeEmbed from "@formfacade/embed-react"


export default function Register() {

return(

    <FormfacadeEmbed

    formFacadeURL="https://formfacade.com/include/101831235159428287253/form/1FAIpQLSdYEuZmv4AGpvnNuRU7sXlWy18WMdkHx4yb1Y1RhZEDPjq2Qw/classic.js/?div=ff-compose"

    onSubmitForm={() => console.log('Form submitted')}

    />
  )
}
  
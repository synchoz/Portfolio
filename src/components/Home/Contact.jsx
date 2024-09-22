import Icon from "../Icon/Icon";

export default function Contact({Id}) {
    return (
        <div id={Id} className='PageContainer text-white py-16 px-16 ml-auto mr-auto'>
          <div className='contactMeContainer'>
            <div className='title text-7xl text-center mb-5'>
              Contact <span className='text-[#ff004f]'>Me!</span>
            </div>
            <div className='grid gap-y-6 grid-cols-1'>
              <div className='mailContainer flex items-center'>
                <div className='LogoMail mr-4'>
                  <Icon name={'mail'} size={30} className={'socialLink contactLink'}/>
                </div>
                <div className='MailInfo'>
                  <div className='text-2xl  font-rubik'>Mail</div>
                  <div className='text-gray-500 text-xl'>dima2191@gmail.com</div>
                </div>
              </div>
              <div className='linkedinContainer flex items-center'>
                <div className='LogoLinkedin mr-4'>
                  <Icon name={'linkedin'} size={30} className={'socialLink contactLink'} />
                </div>
                <div className='LinkedinInfo mr-4'>
                  <div className='text-2xl font-rubik'>Linkedin</div>
                  <div className='text-gray-500 text-xl'>https://www.linkedin.com/in/dima-vb/</div>
                </div>
              </div>
              <div className='PhoneContainer flex items-center'>
                <div className='LogoPhone mr-4'>
                <Icon name={'phone'} size={30} className={'socialLink contactLink'}/>
                </div>
                <div className='PhoneInfo'>
                  <div className='text-2xl  font-rubik'>Phone</div>
                  <div className='text-gray-500 text-xl'>0547989162</div>
                </div>
              </div>
              <div className='GithubContainer flex items-center'>
                <div className='LogoGithub mr-4'>
                  <Icon name={'github'} size={30} className={'socialLink contactLink'}/>
                </div>
                <div className='GithubInfo'>
                  <div className='text-2xl font-rubik'>Github</div>
                  <div className='text-gray-500 text-xl'>github.com/synchoz</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
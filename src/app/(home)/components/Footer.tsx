import { currentYear, developedBy } from '@/app/common/constants'

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container">
        <div className="flex">
          <div className="w-full">
            <div className="text-center">
              <p className="text-muted mt-8">
                {' '}
                © {currentYear}&nbsp; Techprice. By{' '}
                <a className="font-medium" href="#">
                  {developedBy}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

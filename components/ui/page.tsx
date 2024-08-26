import pageStyles from './page.module.css';

type PageProps = {
  children: React.ReactNode;
};

const page:React.FC<PageProps> = ({children }) => {
  return (
    <div className={pageStyles.sectionCommonStyles}>
      {children}
    </div>
  )
}

export default page;

const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
           <span className="text-primary">© {new Date().getFullYear()}</span>  Salesforce Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
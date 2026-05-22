interface FooterProps {
  companyName: string;
  year?: number;
}

export default function Footer({ companyName, year = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-gray-800 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          &copy; {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

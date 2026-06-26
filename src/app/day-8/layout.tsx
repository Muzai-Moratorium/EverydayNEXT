import './global.css'

const Day8LayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};
export default Day8LayOut;

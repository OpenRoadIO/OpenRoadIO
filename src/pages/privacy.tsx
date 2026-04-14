const Privacy = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '40px', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#ff0000' }}>Privacy Policy</h1>
      <p>GTM Variable Mapper does not collect, store, or transmit any user data, browsing history, or personal information.</p>
      <p>All DataLayer parsing and path generation happen locally in your browser. No data from your GTM preview mode or website content is ever sent to our servers.</p>
      <p>The only external communication made by this extension is a secure license check via Lemon Squeezy to verify your Pro status.</p>
    </div>
  );
};

export default Privacy;

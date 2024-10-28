// app/api/lib/sslcommerz.js
export class SSLCommerzPayment {
  constructor(store_id, store_passwd, is_live) {
    this.store_id = store_id;
    this.store_passwd = store_passwd;
    this.baseUrl = is_live 
      ? 'https://securepay.sslcommerz.com' 
      : 'https://sandbox.sslcommerz.com';
  }

  async init(data) {
    const apiUrl = `${this.baseUrl}/gwprocess/v3/api.php`;
    
    // Convert data to URLSearchParams
    const formData = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    
    return response.json();
  }
}

<template>
  <div class="contact-us">
    <h1>Contact Us</h1>
    <p>
      We’d love to hear from you! Reach out to us via any of the methods below, and we’ll get back to you as soon as possible.
    </p>

    <div class="contact-details">
      <div class="detail">
        <h2>Email</h2>
        <p>
          <a href="mailto:info@serbianshop.com">info@serbianshop.com</a>
        </p>
      </div>

      <div class="detail">
        <h2>Phone</h2>
        <p>
          <a href="tel:+123456789">+123 456 789</a>
        </p>
      </div>

      <div class="detail">
        <h2>Address</h2>
        <p>123 Serbian Street, Belgrade, Serbia</p>
      </div>

      <div class="detail">
        <h2>Follow Us</h2>
        <p>
          <a href="https://facebook.com" target="_blank">Facebook</a> |
          <a href="https://instagram.com" target="_blank">Instagram</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style scoped>
.contact-us {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.contact-us h1 {
  text-align: center;
  color: #2c3e50;
}

.contact-us p {
  text-align: center;
  margin: 10px 0 20px;
  color: #34495e;
  font-size: 18px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.detail h2 {
  color: #3498db;
  margin-bottom: 5px;
}

.detail p {
  color: #2c3e50;
  font-size: 16px;
}

.detail a {
  text-decoration: none;
  color: #3498db;
}

.detail a:hover {
  text-decoration: underline;
}
</style>

<template>
  <div class="footer">
    <div class="footer-container">
      <div class="title">
        <h1>Lovely Online Shop</h1>
      </div>

      <div class="content">
        <div class="content-section">
          <h4>Browse Our Website</h4>
          <ul>
            <li>About Us</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Policy</li>
            <li>Sales Center</li>
            <li>Contact Us</li>
            <li>Affiliate Program</li>
            <li>Intellectual Property Rights</li>
          </ul>
        </div>

        <div class="content-section">
          <h4>Customer Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Payment Methods</li>
            <li>Track Orders</li>
            <li>Track Shipment</li>
            <li>Return Policy</li>
          </ul>
        </div>

        <div class="content-section">
          <h4>Follow Us</h4>
          <ul>
            <li><Icon name="ic:baseline-facebook" class="icon" />Facebook</li>
            <li><Icon name="uil:instagram-alt" class="icon" />Instagram</li>
            <li><Icon name="mdi:twitter-box" class="icon" />Twitter</li>
            <li><Icon name="mdi:linkedin" class="icon" />Linkdin</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  margin-top: 4em;
  padding: 2em 10em;
  padding-bottom: 4em;
  background-color: var(--tertiary);
  font-size: 0.75rem;
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: start;
  justify-content: center;
  width: 70vw;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2em;
  width: 100%;

  li {
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.5em;
    &:hover {
      color: var(--secondary);
      cursor: pointer;
    }
  }
}

h1 {
  font-weight: 700;
  font-size: 1rem;
}

h4 {
  font-weight: 700;
}
</style>

const app = document.getElementById('app');

const state = {
  token: localStorage.getItem('heartlink_token') || '',
  user: JSON.parse(localStorage.getItem('heartlink_user') || 'null'),
  view: 'home',
  profiles: [],
  matches: [],
  conversations: []
};

function render() {
  if (!state.token) {
    app.innerHTML = `
      <header>
        <div class="container">
          <nav>
            <a href="#top" class="brand">Heart<span>Link</span></a>
            <div class="nav-links">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#stories">Stories</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </div>
            <div class="btn-row">
              <button class="secondary" onclick="state.view='login'; render();">Log in</button>
              <button onclick="state.view='register'; render();">Get started</button>
            </div>
          </nav>
        </div>
      </header>
      <main id="top" class="container">
        <section class="hero">
          <div class="hero-card">
            <p class="status">Dating, built for Kenya</p>
            <h1>Find your rhythm, not just a match.</h1>
            <p>HeartLink pairs real compatibility with real safety — smart discovery, verified profiles, and conversations that actually go somewhere.</p>
            <div class="btn-row">
              <button onclick="state.view='register'; render();">Create free account</button>
              <button class="secondary" onclick="document.getElementById('features').scrollIntoView({ behavior: 'smooth' });">See how it works</button>
            </div>
            <div class="hero-stats">
              <div class="card"><strong>120K+</strong><span>active members</span></div>
              <div class="card"><strong>38K+</strong><span>matches made monthly</span></div>
              <div class="card"><strong>4.7★</strong><span>average rating</span></div>
              <div class="card"><strong>87%</strong><span>verified profiles</span></div>
            </div>
          </div>
          <div class="hero-card">
            <div class="card"><strong>94%</strong><span>compatible — shared interests in travel, cooking & jazz</span></div>
            <div class="card"><strong>2.1s</strong><span>avg. reply time</span></div>
            <div class="card"><strong>Free</strong><span>to start</span></div>
          </div>
        </section>

        <section id="features" class="section">
          <h2>Every detail, designed to get you to the good part.</h2>
          <p>From your first swipe to your first date, HeartLink is built around real connection — not endless scrolling.</p>
          <div class="feature-grid">
            <div class="feature-card"><h3>Smart compatibility</h3><p>Our matching considers interests, goals, and lifestyle — not just a photo — to surface people worth talking to.</p></div>
            <div class="feature-card"><h3>Verified profiles</h3><p>Photo verification and moderation keep the community genuine, so who you see is who you meet.</p></div>
            <div class="feature-card"><h3>Real-time chat</h3><p>Typing indicators, read receipts, and instant delivery make conversations feel like actual conversations.</p></div>
            <div class="feature-card"><h3>Nearby discovery</h3><p>Filter by distance, age, education, and relationship goals to find people who fit your life, not just your feed.</p></div>
            <div class="feature-card"><h3>Built-in safety</h3><p>Block, report, and privacy controls are one tap away — with a moderation team actually reviewing reports.</p></div>
            <div class="feature-card"><h3>Boost & Super Like</h3><p>Stand out when it counts with profile boosts and super likes that put you at the front of the queue.</p></div>
          </div>
        </section>

        <section id="stories" class="section">
          <h2>Members who found their rhythm.</h2>
          <div class="story-grid">
            <div class="story-card"><p>“We matched over a shared love of hiking Mt. Kenya — six months later we're planning a trip together.”</p><strong>Wanjiru — Nairobi</strong></div>
            <div class="story-card"><p>“The verification badge actually made me trust the app enough to meet up. Best decision I made this year.”</p><strong>Otieno — Kisumu</strong></div>
            <div class="story-card"><p>“Premium's 'who liked you' feature saved me so much guessing. Matched with my now-girlfriend within a week.”</p><strong>Mutua — Mombasa</strong></div>
          </div>
        </section>

        <section id="pricing" class="section">
          <h2>Start free. Upgrade when you're ready.</h2>
          <p>No hidden fees. Cancel or change plans anytime from your account settings.</p>
          <div class="pricing">
            <div class="price"><h3>Free</h3><strong>KSh 0/month</strong><ul><li>Limited daily likes</li><li>Basic matching</li><li>Limited messages</li></ul><button onclick="state.view='register'; render();">Get started</button></div>
            <div class="price featured"><h3>Premium</h3><strong>KSh 499/month</strong><ul><li>Unlimited likes</li><li>Unlimited messaging</li><li>See who liked you</li><li>Advanced filters</li><li>No ads</li></ul><button onclick="state.view='register'; render();">Go Premium</button></div>
            <div class="price"><h3>Premium Plus</h3><strong>KSh 1,499/month</strong><ul><li>Everything in Premium</li><li>Profile Boost</li><li>Priority placement</li><li>Incognito mode</li><li>Read receipts</li><li>Exclusive badge</li></ul><button onclick="state.view='register'; render();">Go Plus</button></div>
          </div>
        </section>

        <section class="section">
          <h2>Take it with you</h2>
          <p>HeartLink for iOS and Android — coming soon. Get notified the moment the app launches, with push alerts for matches and messages on the go.</p>
          <div class="download-cards">
            <div class="card"><strong>Coming soon on</strong><p>App Store</p></div>
            <div class="card"><strong>Coming soon on</strong><p>Google Play</p></div>
          </div>
        </section>

        <section id="faq" class="section">
          <h2>Questions, answered.</h2>
          <div class="faq-list">
            <div class="faq-item"><strong>Is HeartLink free to use?</strong><p>Yes — creating a profile, browsing, and getting a limited number of daily likes is completely free. Premium unlocks unlimited likes and messaging.</p></div>
            <div class="faq-item"><strong>How does profile verification work?</strong><p>You submit a quick photo check that our moderation team reviews. Verified profiles get a badge that's visible to other members.</p></div>
            <div class="faq-item"><strong>What payment methods do you accept?</strong><p>M-Pesa STK Push, Visa, Mastercard, and PayPal. Subscriptions renew automatically unless you turn off auto-renew in settings.</p></div>
            <div class="faq-item"><strong>Can I control who sees my profile?</strong><p>Yes. Privacy settings let you go incognito (Premium Plus), block specific users, and control your visibility in discovery.</p></div>
            <div class="faq-item"><strong>How do I report or block someone?</strong><p>Tap the flag icon on any profile or chat to report, or the block icon to stop seeing them entirely. Reports go to our moderation team.</p></div>
          </div>
        </section>

        <section id="contact" class="section contact-section">
          <div class="contact-grid">
            <div class="contact-details">
              <div class="contact-card"><h3>We're here to help.</h3><p>Questions about your account, safety concerns, or partnership ideas — reach out any time.</p></div>
              <div class="contact-card"><p>✉️ <strong>Email</strong> support@heartlink.co.ke</p><p>📞 <strong>Phone</strong> +254 700 000 000</p><p>📍 <strong>Office</strong> Nairobi, Kenya</p></div>
            </div>
            <div class="contact-card">
              <form>
                <label>Full name<input placeholder="Full name" /></label>
                <label>Email<input type="email" placeholder="Email" /></label>
                <label>Subject<input placeholder="Subject" /></label>
                <label>Message<textarea rows="5" placeholder="Message"></textarea></label>
                <button type="button">Send message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="container footer-grid">
          <div>
            <p><strong>♥ HeartLink</strong></p>
            <p>Modern, safe dating built for Kenya. Find your rhythm.</p>
          </div>
          <div class="footer-links">
            <strong>Product</strong>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Sign up</a>
          </div>
          <div class="footer-links">
            <strong>Company</strong>
            <a href="#contact">Contact</a>
            <a href="#faq">FAQ</a>
            <a href="#top">Careers</a>
          </div>
        </div>
        <div class="container" style="margin-top:1.5rem; border-top:1px solid var(--border); padding-top:1rem; display:flex; justify-content:space-between; gap:1rem; flex-wrap:wrap; color:var(--muted);">
          <span>© 2026 HeartLink. All rights reserved.</span>
          <span>Privacy Policy • Terms of Service • Community Guidelines</span>
        </div>
      </footer>
    `;
    return;
  }

  if (state.view === 'register') {
    app.innerHTML = `
      <div class="container" style="padding:3rem 0; max-width:480px;">
        <div class="panel">
          <h2>Create your account</h2>
          <form id="register-form">
            <input id="name" placeholder="Full name" required />
            <input id="email" type="email" placeholder="Email" required />
            <input id="password" type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
          <p style="margin-top:1rem;"><a href="#" onclick="state.view='login'; render();">Already have an account?</a></p>
        </div>
      </div>
    `;
    document.getElementById('register-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      };
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (response.ok) {
        state.token = data.token;
        state.user = data.user;
        localStorage.setItem('heartlink_token', data.token);
        localStorage.setItem('heartlink_user', JSON.stringify(data.user));
        state.view = 'dashboard';
        render();
      } else {
        alert(data.message || 'Registration failed');
      }
    });
    return;
  }

  if (state.view === 'login') {
    app.innerHTML = `
      <div class="container" style="padding:3rem 0; max-width:480px;">
        <div class="panel">
          <h2>Welcome back</h2>
          <form id="login-form">
            <input id="email" type="email" placeholder="Email" required />
            <input id="password" type="password" placeholder="Password" required />
            <button type="submit">Log in</button>
          </form>
          <p style="margin-top:1rem;"><a href="#" onclick="state.view='register'; render();">Need an account?</a></p>
        </div>
      </div>
    `;
    document.getElementById('login-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const payload = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      };
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (response.ok) {
        state.token = data.token;
        state.user = data.user;
        localStorage.setItem('heartlink_token', data.token);
        localStorage.setItem('heartlink_user', JSON.stringify(data.user));
        state.view = 'dashboard';
        render();
      } else {
        alert(data.message || 'Login failed');
      }
    });
    return;
  }

  app.innerHTML = `
    <div class="container app-shell">
      <aside class="sidebar">
        <h3>HeartLink</h3>
        <p>${state.user?.name || 'Member'}</p>
        <div class="list">
          <button onclick="state.view='dashboard'; render();">Dashboard</button>
          <button class="secondary" onclick="state.view='discover'; render();">Discover</button>
          <button class="secondary" onclick="state.view='messages'; render();">Messages</button>
          <button class="secondary" onclick="state.view='profile'; render();">Profile</button>
          <button class="secondary" onclick="logout();">Logout</button>
        </div>
      </aside>
      <section class="main-panel">
        <h2>Welcome to HeartLink</h2>
        <p>Enjoy a premium, polished dating experience with live chat, smart discovery, and beautiful profiles.</p>
        <div class="cards">
          <div class="card"><strong>Smart matching</strong><p>Compatibility-based suggestions for your next conversation.</p></div>
          <div class="card"><strong>Private messaging</strong><p>Real-time chat with typing indicators and emoji support.</p></div>
          <div class="card"><strong>Secure profile</strong><p>Verification status, live alerts, and privacy controls.</p></div>
        </div>
      </section>
    </div>
  `;
}

async function logout() {
  localStorage.removeItem('heartlink_token');
  localStorage.removeItem('heartlink_user');
  state.token = '';
  state.user = null;
  state.view = 'home';
  render();
}

window.addEventListener('load', render);
window.state = state;
window.render = render;
window.logout = logout;

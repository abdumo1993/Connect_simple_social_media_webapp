<h1>Connect Simple Social Media WebApp </h1>
<h2>Backend</h2>
<h3>How to Start</h3>
<p>First clone the backend with command 
<pre><code>git clone -b backend https://github.com/abdumo1993/Connect_simple_social_media_webapp</code></pre>
</p>
<li>navigate to the folder you created and use this command to run the server in developer mode</li>
<pre><code>npm run start:dev</code></pre>
<li>if you want to change the port go to index.mjs and edit:</li>

<pre><code>const PORT = process.env.PORT || 3000;</code></pre>
<pre><code>const PORT = process.env.PORT || YOUR_PORT;</code></pre>


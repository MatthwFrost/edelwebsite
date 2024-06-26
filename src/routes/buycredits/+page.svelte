<script>
  import { fade, fly } from "svelte/transition";
  import { AccordionItem, Accordion } from "flowbite-svelte";
  let email_entered = false;
  let entered = "";
  let emailFound = null;
  let loading = false;

  function readTime(totalCharacters) {
    const AVG_CHARACTERS = 5;
    const AVG_WPM = 200;

    const AVG_WORDS = totalCharacters / AVG_CHARACTERS;
    let READING_TIME = AVG_WORDS / AVG_WPM;

    let timeString;
    if (READING_TIME >= 60) {
      timeString = `${READING_TIME.toFixed(0) / 60} hours`;
    } else {
      timeString = `${READING_TIME.toFixed(0)} minutes`;
    }

    return timeString;
  }

  let options = [
    { id: 1, chars: "30,000 Characters", price: (4.2).toFixed(2) },
    {
      id: 2,
      chars: "60,000 Characters",
      price: (8.39).toFixed(2),
      readTime: readTime(60000),
    },
    {
      id: 3,
      chars: "150,000 Characters",
      price: (21.6).toFixed(2),
      readTime: readTime(150000),
    },
    // { id: 4, chars: '100,000 Characters' }
  ];
  let selectedOption = null;

  function getCheckout() {
    console.log(entered);
    fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: selectedOption,
        email: entered,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        // console.log(url)
        window.location = url;
      })
      .catch((e) => {
        console.error(e);
      });
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Function to check if the email is valid
  function isValidEmail(email) {
    return emailRegex.test(email);
  }

  function confirmEmail() {
    if (!emailFound) {
      if (isValidEmail(entered)) {
        loading = true;
        // Proceed with email confirmation
        fetch(`/api/confirm-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: entered,
          }),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return res.json().then((json) => Promise.reject(json));
          })
          .then(({ data }) => {
            // console.log("Found user: ", data);
            emailFound = true;
            loading = false;
          })
          .catch((e) => {
            console.error(e);
            emailFound = false;
            loading = false;
          });
        // Your confirmEmail logic here
      } else {
        console.error("Invalid email address.");
        // Handle invalid email (optional)
      }
    } else {
      email_entered = true;
    }
  }

  $: buttonText = loading
    ? "Finding account..."
    : emailFound
      ? "Continue"
      : "Confirm email";
</script>

<main class="w-[100vw] flex flex-row font-sans">
  <section
    class="md:w-[50vw] hidden h-[100vh] p-24 bg-[rgb(254,241,24, 0.5)] md:flex flex-col justify-center overflow-scroll"
    style="background-image: url('/buycredits_backgorund.png');"
  >
    <section
      class="bg-fixed absolute top-0 left-0 px-24 py-20 text-[rgb(14, 19, 24)]"
    >
      <a href="/" class="flex flex-row items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-left"
          ><line x1="19" y1="12" x2="5" y2="12" /><polyline
            points="12 19 5 12 12 5"
          /></svg
        >
        Back
      </a>
    </section>
    <div>
      <div class="flex flex-row justify-content items-center">
        <!-- <img class="w-[4vw]" src="/newicon.png" alt="Edel icon"> -->
        <h1
          class="text-6xl leading-none tracking-tight text-[rgb(14, 19, 24)] font-bold"
        >
          Get credits.
        </h1>
      </div>
      <p class="pt-4 text-lg">
        Grab extra credits to continue listening with Readel. Get started by
        finding your Readel account.
      </p>
      <!--/ <p class="py-4 text-lg"><a href="credits" class="underline">Why credits?</a></p> -->
      <div
        class=" mt-10 rgba(255, 251, 40, 1) p-10 border border-neutral-700 rounded-lg shadow-lg"
      >
        <h1
          class="text-2xl leading-none tracking-tight text-[rgb(14, 19, 24)] font-bold"
        >
          FAQ:
        </h1>
        <div class="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            Is this a subscription?
          </div>
          <div class="collapse-content">
            <p>No. This is a one time payment.</p>
          </div>
        </div>
        <div class="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            What happens when you buy characters?
          </div>
          <div class="collapse-content">
            <p>
              When you buy more characters, they will instantly be added to your
              Readel account.
            </p>
            <p>
              The characters will be added to the daily limit. For example, if
              the default daily limit is 10,000 characters and you buy 30,000
              characters, your new daily limit is 40,000 characters.
            </p>
            <p class="mt-2">
              Please <a
                class="underline"
                href="https://ag7phnq517o.typeform.com/to/kEKKBCGF">contact</a
              > me if you have any issues.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Do you handle payments?
          </div>
          <div class="collapse-content">
            <p>
              No. A company called <a
                href="https://www.stripe.com"
                target="_blank"
                class="underline">Stripe</a
              > handles all payments and credit/debit card details. I don't see any
              of your credit/debit card details.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="md:w-[50vw] w-[100vw] h-[100vh] bg-zinc-100 flex flex-col justify-center items-center p-10"
    style="background-image: url('/buycredits_right.png');"
  >
    <div class="items-start md:w-[40vw]">
      {#if !email_entered}
        <div>
          <h1 class="text-lg">Enter email</h1>
          <p class="text-gray-500 text-md">
            Please provide the email that is linked to your Readel account.
          </p>
          <input
            class="md:w-[90%] w-[90vw] h-14 mt-5 mb-2 rounded-lg border flex flex-row items-center px-4 bg-gray-100 {emailFound
              ? 'border-2 border-green-600'
              : ''}"
            placeholder="Enter email"
            bind:value={entered}
            type="email"
          />
          <div class="h-8">
            {#if emailFound === true}
              <p class="text-green-600 md:text-md text-sm">
                Provided email is linked to an Readel account. You can continue.
              </p>
            {:else if emailFound === false}
              <p class="text-red-600 md:text-md text-sm">
                We can't find an account linked to your email.
              </p>
            {/if}
          </div>
          <button
            type="submit"
            on:click={confirmEmail}
            disabled={!isValidEmail(entered)}
            class="md:w-[30%] w-[60%] text-white py-2 px-4 mt-2 md:mt-0 rounded {!isValidEmail(
              entered
            )
              ? 'cursor-not-allowed opacity-50'
              : 'hover:bg-blue-600'} {emailFound
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-blue-500'}"
          >
            {buttonText}
          </button>
        </div>
      {:else}
        <div>
          <h2 class="text-2xl leading-none tracking-tight">
            Selected amount of characters you get <strong>daily</strong>:
          </h2>
          <p class="mt-4">
            Characters will be <strong>added</strong> to your current daily total.
            For example, If your current daily limit is 10,000 characters, and you
            purchase 30,000 now. You will have 40,000 credits to use daily.
          </p>
          {#each options as option}
            <button
              class="w-full h-14 my-5 rounded-lg border flex flex-row items-center px-4 {selectedOption ===
              option.id
                ? 'bg-blue-500 border-blue-200 text-slate-50'
                : ''}"
              on:click={() => {
                selectedOption =
                  selectedOption === option.id ? null : option.id;
              }}
            >
              <span class="">${option.price} </span>&nbsp;&#8226;&nbsp;
              <span class="font-bold">{option.chars}</span>
            </button>
          {/each}
          <div class="flex flex-row justify-between items-center">
            <button
              href="/"
              class="flex flex-row items-center font-bold"
              on:click={() => {
                email_entered = !email_entered;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-left"
                ><line x1="19" y1="12" x2="5" y2="12" /><polyline
                  points="12 19 5 12 12 5"
                /></svg
              >
              Back
            </button>
            <button
              on:click={() => {
                getCheckout();
              }}
              disabled={!selectedOption}
              class="md:w-[30%] w-[50%] bg-blue-500 text-white py-2 px-4 rounded {!selectedOption
                ? 'cursor-not-allowed opacity-50'
                : 'hover:bg-blue-600'}">Continue</button
            >
          </div>
          <!-- <p>You selected: {selectedOption}</p> -->
        </div>
      {/if}
      <p class="py-10 text-gray-500 text-sm">
        All payments are handled by <a
          href="https://www.stripe.com"
          class="underline">Stripe</a
        >. I do not handle payments or hold the personal information of users.
      </p>
    </div>
  </section>
</main>

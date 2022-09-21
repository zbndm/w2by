import { webhookCallback, Bot } from "1co"

export async function onRequestPost(context) {
  var { request } = context

  var url = new URL(request.url)
    var { pathname } = url
   pathname = pathname.replace("/", "")
    const params = {}
    const queryString = url.search.slice(1).split('&')
    queryString.forEach(item => {
        const [key, value] = item.split('=')
        if (key) params[key] = value || true
    })

    
    

    
      if(params.t) globalThis.TOKEN = params.t



  try {
    
    var bot = new Bot(TOKEN)

//     const BOT_DEVELOPER = 1875804439





    bot.use(async (ctx, next) => {


console.info(ctx)
      await next()
    })

    
// bot.on('callback_query:data', async (ctx, next) => {
//   console.log('another callbackQuery happened', ctx.callbackQuery.data.length, ctx.callbackQuery.data)
//   return next()
// })

// bot.command('start', async ctx => menuMiddleware.replyToContext(ctx))
// bot.use(menuMiddleware.middleware())

// bot.catch(error => {
//   console.warn(error)
// })

// async function startup() {
//   await bot.start({
//     onStart: botInfo => {
//       console.log(new Date(), 'Bot starts as', botInfo.username)
//     },
//   })
// }

// bot.command("hunger", async (ctx) => {
//   const count = ctx.session.pizzaCount
//   await ctx.reply(`Your hunger level is ${count}!`)
// })

// bot.hears(/🍕/, (ctx) => ctx.session.pizzaCount++)

     bot.command("set", (ctx) => ctx.reply("Welcome!"))

//     bot.command("help", async (ctx) => {

//       if (ctx.config.isDeveloper) await ctx.reply("Hi mom!! <3")
//       else await ctx.reply("Welcome, human!")
//     })

//     bot.on(["::pre", "::code"], (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`))

// bot.on("message", async (ctx) => {
//   const count = ctx.session.pizzaCount
//   await ctx.reply(`Your hunger level is ${count}!`)
// })

    const handleUpdate = webhookCallback(bot, "std/http")

    await handleUpdate(request)


  // globalThis.B = {}
  //  await Z(request)
   //await Post(request)
   //console.info(B)
  //        return new Response(JSON.stringify(B, null, 4), {
  //   headers: {
  //     'content-type': 'application/json',
  //   }
  // })
    //var j = await L.get("J")
   // console.info(j)
  } catch (err) {
    console.warn(err)
   // return new Response({ status: 200 })
  }
   return new Response({ status: 200 })
  //request = await request.json()
  //   finally {
  //     return new Response(JSON.stringify(B, null, 4), {
  //   headers: {
  //     'content-type': 'application/json',
  //   }
  // })
  // }
  // await Z(request)

}

async function Post(request) {

//     var re = await (request.clone()).json()
// re.T = "5034779343:AAE8Ryh5H0EbczCYiF0e9YI0YctZ8kwOfQs"
// B = await fetch(
//       `https://ii.1l.workers.dev`,
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json"
//         },
//         body: JSON.stringify(re)
//       }
//     ).then( r => r.json() )


    //            await fetch("https://gleb.1l.workers.dev", {
    //             method: 'POST',
    //             headers: {
          
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //             body: JSON.stringify({location:ll,geo:null})
    //         })

    // const newRequestInit = {
    //     method: "POST",
    //     body: JSON.stringify(re),
    //     redirect: 'content-type': 'application/json'
    // }
    // const url = new URL("https://gleb.1l.workers.dev")
    // const newRequest = new Request(
    //     url.toString(),
    //     new Request(request, newRequestInit),
    // )
    // try {
    //     return await fetch(newRequest)
    // } catch (e) {
    //     console.warn(e)
    //     return new Response({ status: 200 })
    // }
}

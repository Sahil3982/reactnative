import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Pressable, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import images1 from '../../assets/images/images1.jpg'
import { useState } from "react";
const explore = () => {
  const [first, setfirst] = useState(1)
  const [toggle, settoggle] = useState(false)
  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofZXK-_G7CFJF8T32HbnSjj-Vtl9w9BLXUg&s"
  return (
    <ScrollView style={{
      padding :8
    }}>
      <StatusBar backgroundColor="brown" ></StatusBar>
      <Modal visible={toggle}>
        <Text>hi</Text>
        {/* <Button title="close" onPress={()=>{settoggle(false)
        }}>Close</Button> */}
      </Modal>
      <View style={{
        padding : 4,
        flex :  1
      }}>
        <Button  title="Alert 2" onPress={()=>{
          Alert.alert("Hii",'Bye')
        }}></Button>
       <Pressable  onPress={()=>{
        Alert.alert("kyu","glata")
        setfirst(first*2)
        settoggle(false)
        console.log(first);
        
       }}>
       <Image
        style={{
          borderRadius : 10,
          margin : 2,
          width : 180

        }}
          source={
            images1
          }
        
          width={10}
          height={10}
        />
        <ActivityIndicator ></ActivityIndicator>
        

       </Pressable>
       <Text 
       style={{
        fontSize : 160
       }}>{first}</Text>
       <Pressable onPress={()=>{
        console.log("Imgae2222");
        
       }}>
       <Image
        style={{
          borderRadius : 10,
          margin : 2,
          width : 180

        }}
          source={
            images1
          }
          width={100}
        />
       </Pressable>
        <Image
        style={{
          borderRadius : 10,
          margin : 2,
          width : 180

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        <Image
        style={{
          borderRadius : 10

        }}
          source={
            images1
          }
          width={100}
        />
        {/* <ImageBackground
          source={
            images1
          }
        ><Text>Bg img</Text></ImageBackground> */}
      </View>
      <ScrollView>
      {/* <Text 
      style={{
        fontWeight : 800,
        color : 'red'
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet distinctio totam esse ipsum, hic velit enim nulla harum repellat nisi dolore delectus. Recusandae expedita quae quasi sed fugit praesentium.
      Reiciendis doloremque animi veritatis minima. Voluptates nesciunt ipsa voluptas provident cupiditate. Quia incidunt pariatur assumenda nulla minus libero sint ipsum, explicabo perferendis accusantium possimus placeat itaque debitis eligendi officiis alias!
      Nemo porro tenetur inventore doloremque minima totam voluptatum saepe, eaque dolores impedit sapiente earum accusantium veritatis dolore ipsam magnam alias fugiat nobis. Non perferendis quibusdam adipisci debitis deleniti consectetur labore.
      Quas atque molestiae pariatur assumenda. Ipsa aperiam nam adipisci tempore neque cupiditate vel excepturi sunt nesciunt at. Exercitationem error dolores commodi ea veniam, doloremque odio minus, magni voluptate quos itaque?
      Exercitationem molestiae hic, non rerum quaerat est eos fuga odio delectus molestias atque dolor fugit tempora voluptatum in magnam quisquam, facere voluptate? At laudantium neque id unde, animi veniam possimus.
      Neque reiciendis sint corporis exercitationem quidem cum velit eius laudantium, aliquam praesentium non provident sunt ipsum quasi pariatur dolores? Voluptates inventore dolorum dicta assumenda laboriosam repellat possimus, voluptatum quidem perferendis.
      Nihil obcaecati atque inventore vel repellendus in autem non cumque maxime aliquam ipsum, voluptatibus facilis optio quis ut perferendis ratione! Velit, minima! Dolorem nulla suscipit aliquam accusantium laudantium molestiae magnam.
      Maxime ad amet, expedita quae at fuga delectus repellendus vitae dicta facere asperiores, ea eius enim possimus? Reiciendis eveniet magnam, accusantium cumque, repellat, harum vitae facilis culpa reprehenderit laboriosam dolores!
      Modi quasi, sapiente ullam at vitae laboriosam beatae aperiam alias sequi quae, eaque hic, ut magni minus facere ab culpa! Exercitationem labore recusandae temporibus, suscipit quis dolore doloremque distinctio quos.
      Voluptas consequuntur, sunt consequatur voluptatibus eius ut ratione expedita eaque molestiae minima ducimus dolorum, qui adipisci aspernatur eligendi quasi corrupti perspiciatis in. Doloremque eos tempora nisi, quo qui eligendi consequatur?
      Debitis, at praesentium, voluptatum cupiditate quis nostrum illo rerum provident molestias incidunt illum tenetur numquam ipsum! Recusandae tenetur libero illo consequatur placeat quaerat voluptas, rerum porro. Velit omnis sint veritatis.
      Et harum praesentium deleniti incidunt libero vero assumenda, provident facere iure maxime autem animi qui! Obcaecati exercitationem, animi quibusdam consequatur ut veritatis! Nobis, similique labore? Nesciunt vitae temporibus eius quos.
      Fugiat iste ab veniam dolor consequuntur voluptatum doloribus quo alias porro aut fuga, ullam nemo. Illum temporibus, dicta explicabo itaque blanditiis dignissimos vitae, maxime voluptas amet voluptatibus veniam nihil ad.
      Laborum deleniti officiis ut voluptatum voluptatem, expedita cum veniam, facere vel ipsa, maxime accusantium! Modi laborum numquam officia odit quod, dignissimos distinctio quos, perspiciatis qui vel quidem, atque architecto esse!
      Pariatur beatae ex consequatur eaque labore accusamus ipsa hic alias sit laboriosam, quam minima facere consequuntur vitae cupiditate officia eum ab dignissimos error a dolorum ipsam at. Molestias, minus at.
      Eaque debitis autem ipsum, maxime nobis perspiciatis eligendi aut ullam. Repellendus maiores dignissimos illum illo quae consequatur, nulla ducimus ipsam architecto atque, earum ipsum repellat nostrum dolorem iste necessitatibus alias?
      Consequuntur voluptatum commodi fugit rem vel cupiditate quisquam eligendi, iusto reiciendis soluta officia quae corporis, veritatis quaerat minima enim in quam explicabo exercitationem, mollitia sunt vero aspernatur. Adipisci, harum pariatur.
      Error delectus, obcaecati quasi perferendis perspiciatis harum! Ex dolorum eius officia quibusdam odit ipsa, culpa nam laudantium fuga. Vero possimus sunt eveniet atque consectetur enim saepe, quos debitis commodi tempora!
      Praesentium aliquam consequuntur omnis fugit natus sapiente deleniti delectus provident, voluptatem ea itaque! Obcaecati quibusdam nesciunt placeat autem magni sequi, porro cumque eaque, exercitationem sed quos laborum ipsa ratione! Delectus.
      Quis molestiae ad totam consequuntur vitae quidem quibusdam quaerat laudantium aliquid. Expedita suscipit aliquam enim molestias autem vel sunt at. Dolor pariatur dolorum at laboriosam quos quae voluptates fugiat quisquam.
      Culpa assumenda corrupti rem corporis ex, architecto possimus quibusdam vel quisquam nam, delectus error voluptatem, numquam atque reiciendis sint nostrum minima! Soluta sit inventore nulla ipsa asperiores amet a quos.
      Cum distinctio vel molestias harum ad libero, corporis iste laborum commodi accusamus animi sed quasi ratione suscipit sapiente eos nobis minus voluptatibus esse debitis dignissimos. Quo deleniti molestias repellat itaque.
      Laboriosam voluptatem soluta ut amet quia, adipisci sunt ipsam sapiente. Iure sed veniam cupiditate quibusdam dolore facilis consequuntur quis. Nesciunt tenetur esse voluptas commodi provident, natus expedita sapiente accusantium. Assumenda!
      Asperiores beatae mollitia, facilis odio soluta laborum exercitationem, necessitatibus et delectus autem non! Earum repellat, nesciunt ut ipsa distinctio corporis iusto laudantium deserunt maiores accusantium velit iure. Accusantium, beatae ad.
      Sunt qui praesentium eligendi amet odit quod illo! Facilis eligendi numquam explicabo natus inventore impedit neque cumque obcaecati quo? Temporibus, voluptatum. Illum accusamus, ipsum soluta reiciendis beatae sequi odio repellendus.
      Eum suscipit incidunt, quae tempora tempore neque culpa molestiae at voluptatum commodi laborum pariatur sequi facere nesciunt a cumque quibusdam. Dolorem eveniet velit non officia, deserunt modi facilis eligendi quae.
      Adipisci labore perferendis fugit eos rerum eius optio vero, placeat mollitia et? Quasi dolorem illum id aliquid? Molestiae et, aspernatur possimus quia totam quis, debitis, ipsam voluptates ipsa mollitia id?
      Aliquid officiis dolores voluptates, facilis assumenda debitis tenetur libero in sed, sint commodi soluta possimus eius molestias neque iusto modi laudantium. Nobis, dolorum magni cum atque totam aliquid adipisci omnis.
      Perspiciatis quas illo incidunt eaque vitae, dolore maxime natus? Maiores, assumenda. Explicabo ipsam ut blanditiis rem error, aspernatur saepe atque quo repellendus aperiam laborum adipisci facere rerum voluptate aliquid et.
      Dolores, quis! Deleniti ea omnis dolorem dicta deserunt at nemo quam asperiores voluptatem possimus iure delectus alias reprehenderit, excepturi doloremque quia beatae cumque cum quidem expedita. Praesentium error temporibus fuga.
      Assumenda eius suscipit, quis necessitatibus perferendis quibusdam porro impedit laudantium provident commodi officiis incidunt placeat mollitia dolorem. Similique, dignissimos at suscipit porro voluptate dolore optio modi illo minus veritatis nesciunt!
      Officiis adipisci optio possimus ipsum perspiciatis expedita ex voluptas assumenda a quis tenetur vero at eveniet hic doloremque, nisi dicta officia aspernatur. Nobis officia pariatur esse veniam tenetur. Perspiciatis, recusandae.
      Illo dolorem harum fugit dolorum iste nobis nemo fuga ducimus perspiciatis quisquam similique delectus libero rerum veritatis assumenda et, minus animi! Laboriosam vitae consequatur nisi ab rerum ipsa iste iusto.
      Ex repudiandae suscipit cupiditate enim eveniet quos aspernatur alias, totam accusantium obcaecati inventore praesentium iusto earum dicta veniam. Fugit error ex molestiae saepe maiores ipsa amet quam laudantium optio expedita.
      Laboriosam, dolorem eaque ducimus facere ullam quod deleniti odit aperiam, cumque commodi quaerat laudantium velit reiciendis quos obcaecati eius animi! Debitis earum delectus nihil quae, dolore architecto quidem pariatur natus?
      Enim quos maxime repudiandae iure ullam excepturi, asperiores rerum cumque omnis provident voluptatum quod quo! Totam nostrum ipsum adipisci, itaque nisi optio tempore voluptas repudiandae accusamus tempora neque iure iusto!
      Laboriosam blanditiis expedita saepe, nam quidem cumque magni, modi rerum voluptas quas vitae at cum unde tenetur recusandae et nostrum nesciunt fugit aliquid exercitationem numquam optio? Perspiciatis, quae. Repellendus, odit.
      Temporibus magnam dolorum ab excepturi voluptatibus! Eum quo fugiat nam? Provident adipisci minus eligendi, vel aliquid voluptate facilis. Corporis quibusdam reprehenderit expedita itaque ipsam quaerat, dolore minus asperiores dolorum facilis.
      Doloremque dicta tempore qui quam sequi numquam impedit optio amet illo consequatur, possimus aliquid voluptates ipsa explicabo sunt esse ipsum rem facere cumque tenetur quis inventore aut debitis necessitatibus? Sapiente?
      Impedit, explicabo, earum voluptatibus totam officiis est, illum dolores nulla laudantium placeat ea optio pariatur. Alias voluptas veritatis nam porro, aliquid ullam asperiores repellat aperiam! Exercitationem maiores voluptate explicabo ut.
      Vel quaerat rem totam commodi enim, excepturi necessitatibus atque veniam labore! Qui minus nulla consequuntur at iusto quisquam saepe mollitia suscipit perspiciatis, odit quas repudiandae iure, omnis placeat consequatur id.
      Sunt enim ducimus iusto mollitia accusamus doloremque. Amet non atque magni dignissimos quae et magnam eum eius adipisci! Nulla perferendis cumque reprehenderit sint vero nesciunt nam odit quaerat a unde!
      Numquam dolorum labore delectus recusandae sequi fugit at hic veritatis voluptatibus nihil, quo nulla est aspernatur error accusamus quia facilis, repudiandae suscipit incidunt quos eius autem expedita! Tempora, voluptates voluptas.
      Incidunt, harum! Minima repudiandae molestias distinctio numquam eius commodi consectetur aut blanditiis iste, unde, asperiores voluptatibus laboriosam sunt id? Odio nulla asperiores est sed vitae quidem architecto eveniet maxime cum!
      Repellat exercitationem voluptatem sit explicabo esse! Ullam, recusandae quae nesciunt nemo quas doloribus nihil, similique error laboriosam numquam et omnis dolorem, odio fugit nobis ut soluta amet. Fuga, dolor deleniti.
      Laborum possimus officiis, optio impedit odit voluptatum accusantium? Ratione vitae quia numquam impedit inventore sunt iste eligendi. Ipsam tempore quidem facilis perspiciatis, rerum placeat laudantium et illum tempora explicabo quae.
      Dolores in tempora magni autem ea repudiandae, repellat eos ipsa voluptates reiciendis amet odit ratione voluptate ad? Architecto iure necessitatibus voluptates porro fugiat cupiditate sequi aut ducimus. Officiis, quaerat commodi!
      Quae maiores, necessitatibus harum repellat molestias rerum nobis id eum dolores iste excepturi tempore nisi! Consequuntur atque ipsa placeat nisi cum blanditiis voluptas aliquam fugiat, veritatis quam esse sapiente ut!
      Magnam architecto voluptatibus laboriosam eligendi illum? Maiores libero est praesentium, aut impedit, quo fugiat qui ad numquam ex laborum quod ipsum facilis repudiandae, voluptatibus minima magni harum quos dolore assumenda?
      Reiciendis totam sit ea quos veritatis neque exercitationem quas iste quis quasi vero dolore, velit, aspernatur minima distinctio officia qui alias nesciunt, odit perspiciatis fuga ipsam placeat! Officiis, mollitia et!
      A perferendis perspiciatis voluptatum facere dolorum similique eos totam sapiente! Quasi numquam dolor cupiditate laudantium temporibus soluta quos, voluptates quidem quaerat eum repellendus, est labore sapiente dicta quod distinctio aut.
      Cum quod impedit, natus distinctio nisi nulla architecto. Commodi officiis sed quis similique quae in architecto suscipit dicta doloremque nemo, eveniet molestiae dolores omnis assumenda, accusantium facilis deserunt non veritatis.
      Magni repellat tempora consequatur vero blanditiis deserunt eum quo ex architecto possimus voluptatum minus natus aspernatur, ipsum sit tempore quos impedit dolores provident dolor quod? Maxime officia est accusantium beatae!
      Rem error possimus nam ullam, voluptate animi, sed adipisci exercitationem numquam eum et modi cum amet voluptatibus consectetur quaerat atque nisi vitae expedita. Eos molestias atque animi debitis ab possimus.
      Nemo dolore ut vel ex aliquid. Voluptas eius et doloremque nostrum atque repellendus eligendi ullam officia velit assumenda excepturi illum temporibus rerum tempora voluptatum, aliquid repellat placeat modi laboriosam provident?
      Possimus omnis neque cupiditate minima, numquam doloremque praesentium quibusdam reprehenderit minus tempore commodi distinctio quia quam. Voluptates corrupti earum voluptatem quas aspernatur rem labore necessitatibus, sequi vel, aliquid facilis numquam!
      Quas, odit. Delectus, dignissimos? Aut veritatis, rerum alias ea nesciunt assumenda nihil facere tempora reprehenderit voluptate aspernatur unde iure mollitia dolor praesentium quae amet ipsa tenetur! Qui cumque in dolores?
      Vero, iusto quibusdam quidem temporibus dignissimos accusamus possimus. Sed blanditiis quod quae repudiandae adipisci dolorem facere eaque dolore natus esse, ipsum eveniet amet quasi quam, voluptatum ipsa molestiae. Ducimus, error?
      Provident facilis corrupti blanditiis culpa dolor natus beatae assumenda enim atque illo, quaerat impedit ipsum iusto accusantium, eos itaque similique sint iste reiciendis nostrum quasi quidem fugit quo unde? Dicta!
      Ipsa deserunt possimus earum odio. Illo harum iure beatae debitis eum eius ipsa voluptatum, quibusdam animi sequi, ratione doloribus soluta, facere nostrum aliquam! Veritatis libero earum sint, expedita nisi cupiditate.
      Necessitatibus ducimus quo inventore recusandae voluptates? Voluptatum nostrum nesciunt minus aliquid, cupiditate magnam eius quasi quam excepturi architecto praesentium obcaecati repellendus a minima? Laudantium reiciendis quod provident ipsam ab! Nostrum!
      Modi hic itaque, eaque odio a quas corporis libero ducimus. Autem distinctio labore voluptate ipsum aliquam quam, nihil, vero cumque dolor iusto expedita eos voluptatibus velit repellat maiores voluptatum nulla.
      Libero perferendis mollitia itaque ipsam vel ipsa laborum numquam dolores aperiam rerum nam accusantium totam porro, dolor nemo! Ipsa nesciunt aut nulla quisquam obcaecati itaque minima corrupti qui nihil cumque?
      Veniam commodi excepturi dolorem assumenda. Dolore, fuga hic pariatur omnis nam et a nisi dicta molestiae blanditiis? Inventore asperiores labore consectetur aliquid repellendus quia, et dolor quas architecto consequatur reiciendis.
      Eos nam exercitationem ducimus corporis facere placeat deleniti, autem repudiandae commodi vero alias vitae culpa dolor, minus iure atque consequuntur reprehenderit. Impedit esse fugiat necessitatibus eius dolores expedita amet exercitationem?
      Delectus cumque, expedita, inventore tenetur eos ex mollitia placeat quam provident nemo accusamus neque soluta aut tempora nesciunt praesentium molestias qui modi dolore. Pariatur sapiente sit, asperiores officia dolorum vel.
      Enim culpa incidunt reprehenderit a? Molestiae provident sunt numquam aliquam veniam nesciunt inventore, officia laboriosam nemo officiis quas voluptas recusandae deleniti perferendis. At inventore laboriosam saepe illo a suscipit itaque?
      Aut deserunt porro ipsum qui minima veniam neque nesciunt ad minus quibusdam cum dignissimos quod sit, voluptates vel illum officia incidunt? Quaerat ipsum distinctio repudiandae perspiciatis odit voluptatem vitae nesciunt.
      Eaque quibusdam quasi aliquam quisquam voluptatem labore at magni quidem, saepe provident vero suscipit dolores voluptas consectetur voluptates doloremque, iure explicabo distinctio repudiandae possimus. Impedit nostrum expedita eligendi magnam repellat!
      Optio, dignissimos veniam. Consequatur sed iure dolores voluptate impedit ullam ducimus vel quasi similique facilis voluptates, sit officia magnam incidunt, odit ratione tenetur excepturi modi corrupti porro esse ut corporis.
      Qui quo, autem expedita sint corrupti natus ut, provident quibusdam ad, ullam hic. Explicabo voluptatibus facere necessitatibus nobis ratione error ut sunt magni repellat recusandae mollitia, nulla numquam assumenda vero!
      Neque accusantium, excepturi officia totam placeat dolorem quam animi, facilis, omnis laboriosam reiciendis nostrum corporis. Expedita, reprehenderit corporis minima non in veniam placeat doloribus eum, nam quis, consequatur sed earum?
      Odio ullam consectetur corrupti molestias soluta magnam aliquam quis quasi, perspiciatis culpa id vel. Ut voluptas temporibus maiores! Sint quaerat vel consequatur, rerum explicabo nihil eos doloremque illum corrupti aliquam!
      Numquam harum unde ipsa aliquam consequatur, sint assumenda perspiciatis, impedit iusto sequi delectus excepturi rerum. Perferendis deserunt sed sint vero deleniti blanditiis numquam, itaque voluptates, commodi debitis aliquid in et?
      Ex nisi, quis est repudiandae quasi nesciunt. Ad dolores aliquam dolore repellendus quos quidem dicta exercitationem eius, tempore accusamus consequatur numquam accusantium rem incidunt doloribus cum maxime obcaecati quibusdam ratione.
      Earum saepe unde cupiditate laboriosam explicabo ipsam. Velit consectetur libero magnam natus laudantium adipisci dolores eaque, pariatur odit in ipsum officia eveniet praesentium blanditiis corrupti ipsam, ea, quos alias minima.
      Temporibus reprehenderit voluptate omnis at obcaecati cum illo, eos eveniet odio harum facere. Veritatis sit accusamus unde perspiciatis, modi error asperiores quidem, culpa sed, dolor quasi architecto incidunt dignissimos temporibus?
      Deleniti officia facilis temporibus ducimus doloribus, quo delectus excepturi quia nulla, laudantium, expedita voluptate libero recusandae repellendus velit debitis dolor perspiciatis exercitationem? Dolore maxime aut repellat, impedit dolorem nostrum doloremque!
      Ipsum culpa animi adipisci officia voluptatem expedita recusandae velit, veritatis aspernatur quo iste impedit beatae natus facilis accusamus qui quis nobis quidem dignissimos sit enim magni hic. Beatae, eius deleniti.
      Fugiat, pariatur, repudiandae hic, beatae cum veritatis quae dolores repellendus voluptates totam sunt incidunt animi? Obcaecati quae sunt perspiciatis minus soluta provident aperiam quidem? Architecto, velit. Quis exercitationem molestias non!
      Officia quis quod quaerat, reprehenderit possimus modi omnis quibusdam, quae doloribus deserunt eaque laudantium, beatae ipsam! Natus dolores similique quo amet quis qui id, provident nulla soluta obcaecati doloribus minus?
      Optio quibusdam incidunt quos earum aliquam ea eaque corrupti recusandae repellat tempora aliquid dolores perferendis, odio asperiores, velit praesentium suscipit possimus nemo maxime voluptatum laudantium est. Perspiciatis fugiat omnis hic.
      Alias nesciunt molestiae odio debitis totam odit! Velit ipsa vel est cumque magnam deleniti fuga quia nobis, ullam veritatis voluptates quidem laudantium nemo quas sit tempora dignissimos, repellat aliquam optio?
      Sint soluta fugiat in repellendus aliquid accusantium quam nam, totam sed ullam facilis temporibus excepturi aspernatur incidunt pariatur. Voluptatum repudiandae quisquam numquam! Iusto alias officiis culpa iure, aliquid voluptates accusamus!
      Nobis blanditiis recusandae ex placeat, ad iste quas reiciendis quisquam sapiente pariatur necessitatibus vitae dignissimos, adipisci officiis quibusdam consequatur beatae voluptatum perferendis laudantium dicta rem aperiam, ipsam sequi. Quas, saepe.
      Sint quam tempora rerum molestias odit at, iure eligendi velit illum, maiores culpa dignissimos, aliquid temporibus praesentium! Quae quisquam fugit ad expedita atque pariatur culpa laboriosam natus, quos repudiandae cumque.
      Ut, quo! Ea, fugiat. Rem vitae dicta necessitatibus quidem omnis perferendis dolorem, cupiditate eaque hic cumque tempore iste accusantium esse dolore incidunt veritatis obcaecati laborum odit, porro natus consectetur maiores!
      Sunt quo pariatur inventore sapiente impedit voluptate maxime laboriosam dolores quisquam ipsum incidunt vel eveniet fugiat hic est, quae possimus ex iure consequatur? Vitae adipisci tempore nostrum quos recusandae cumque?
      Voluptates quae facilis nihil aspernatur animi adipisci sunt ipsam corrupti itaque, architecto deserunt impedit, quidem necessitatibus nostrum expedita doloribus debitis officiis magnam nisi quo delectus saepe? Commodi fuga ullam consectetur.
      Veniam voluptas eveniet non maiores molestiae tempore natus dolores, repellendus officiis, sapiente ex quidem quasi dolore numquam facere, suscipit aliquid. Necessitatibus corporis incidunt debitis qui fugit illo earum! Cumque, facere.
      Maiores, omnis amet labore, hic ipsa maxime laboriosam explicabo, ut laudantium velit doloribus. Veniam dolore facilis, magnam ullam at, debitis pariatur expedita id dignissimos porro odio, sit numquam aperiam temporibus?
      Veniam qui porro, necessitatibus similique et sint harum! Provident voluptatum, accusantium, iure eum pariatur id et libero quam cupiditate aspernatur odit maxime placeat non sequi reprehenderit consequuntur dolorum similique rem!
      Soluta, velit? Soluta eveniet tempore, enim tenetur non nam voluptatem velit sunt, aspernatur aliquid, ad voluptas est eos repellat quasi aut a possimus fugit repudiandae aliquam sit quidem. Neque, non?
      Ipsa perspiciatis distinctio maiores animi quasi officiis adipisci labore, vel error obcaecati eos autem minima ullam ut corporis provident eaque illo rem? Fugiat rerum maiores aut voluptatibus officia mollitia dolores.
      Fugiat similique laboriosam dolorum sapiente, dolorem beatae natus, animi minima quae repellat praesentium accusantium eum omnis cum veritatis molestiae in alias, porro quo dolores non sunt harum nemo! Ex, vero!
      Officiis asperiores dicta fuga numquam sunt dolorum dolor velit iusto soluta. Ipsum harum doloribus ratione culpa libero, nobis commodi labore quidem mollitia aperiam pariatur esse voluptas molestiae. Fuga, quasi esse.
      Vel praesentium provident nam a illo cumque, eos eveniet quas. A nesciunt consequatur, vero non itaque numquam voluptatibus odio maiores porro aliquam quasi laboriosam qui praesentium, nobis iusto adipisci unde?
      Iste obcaecati ducimus architecto voluptate! Sequi tempora odit repellat accusantium omnis sit reiciendis ab! Amet eaque asperiores obcaecati labore dolorum at, repellendus cum inventore a itaque eum non? Autem, sapiente?
      Unde praesentium saepe tenetur ullam ad explicabo mollitia, magnam possimus ducimus quis provident quos nulla ipsam doloremque qui? Facilis ex illum ut harum corporis magnam exercitationem excepturi pariatur aliquid velit.
      Odio corporis saepe odit animi voluptates, consequatur nisi eum aut esse minus sint sapiente similique quos, omnis deserunt reiciendis. Explicabo laboriosam voluptate veniam repudiandae voluptates cupiditate enim dignissimos corporis dolor?
      Molestiae ea ex quae similique ducimus accusamus minima facere, enim expedita odio laudantium sed. Commodi, labore amet! Optio magni fuga provident, praesentium voluptates ab beatae nam, ducimus quo ut aspernatur.
      Accusamus ipsa eius, facere illum mollitia eum voluptates ratione ut modi asperiores voluptatem, necessitatibus culpa repudiandae placeat voluptas sequi a corrupti quo aperiam quos ipsum! Unde corrupti facilis natus soluta.
      Neque reiciendis dignissimos, aliquid atque laudantium corporis commodi, eligendi quae facere repellendus porro vel ducimus cumque vitae fugit ratione, iste ut harum laboriosam? Quibusdam voluptates sint adipisci porro corporis perferendis.
      Placeat odio reiciendis nam, sed in, pariatur, ratione commodi earum magni molestias facilis nobis officiis excepturi mollitia perferendis dolorum blanditiis voluptas iure hic. Sit labore ea alias. Magnam, eum provident?
      Aliquid debitis architecto, libero quas reiciendis dignissimos dolorem illo. Nemo quia amet labore officia, ipsam molestias accusantium cumque quo voluptatem! Cupiditate praesentium voluptates velit quidem cum obcaecati expedita hic optio.
      Repudiandae voluptatem numquam sint nisi ipsa ducimus, explicabo esse doloribus at quos eveniet quae? Veniam totam, recusandae amet eaque deleniti accusamus ex, temporibus illum quaerat, ut consequatur tempore asperiores in.
      Repudiandae dolores assumenda quaerat, voluptatibus iure magni consectetur aut velit atque, placeat, voluptatem ullam quos nemo explicabo rerum autem. Quam corporis, officia cum eius animi adipisci rerum harum minima ab.
      Molestiae eum voluptate, accusamus aut quia placeat veritatis sint quae consequatur molestias esse cumque animi possimus. Eum, quis ipsam quam deserunt ducimus, sint porro dicta rerum quo consectetur nemo perferendis?
      Nulla culpa doloribus sint eum deleniti tempore temporibus voluptatibus aspernatur. Consequuntur distinctio odio accusamus nobis perferendis excepturi, id possimus inventore, delectus, magnam rem? Quod ducimus molestias hic eligendi, assumenda maiores!
      Nemo quod, quaerat aperiam ducimus sint tempora, blanditiis iste deleniti quas reiciendis minima rem officiis cum quidem aspernatur libero! Minima ipsam hic impedit modi quis molestias quidem quisquam fuga laborum.
      Ex atque est at debitis quasi, aperiam, impedit architecto incidunt consequuntur suscipit illo officia quisquam quod eum optio magnam quos provident. Ut animi aspernatur qui dolorem quae facilis excepturi rerum.
      Eveniet rem quasi praesentium quas! Reiciendis unde doloribus vitae neque odit voluptate vel debitis nostrum, laboriosam, facilis tenetur animi dolorum dicta ipsum nulla eum ipsam eligendi deleniti, illo aut? Nobis!
      Necessitatibus asperiores eum dolorum eos quasi perferendis soluta commodi, a ex explicabo! Libero neque eius esse velit fuga ipsum asperiores labore molestias quia tempore, perspiciatis incidunt, earum et mollitia inventore!
      Eveniet ex, reiciendis incidunt earum, obcaecati eaque veniam quas ipsam unde sint quaerat inventore quos, culpa deserunt suscipit! Dicta id quae optio aliquid aspernatur cupiditate doloribus ipsa culpa, consequuntur pariatur.
      Blanditiis aliquid cum alias. Aspernatur illo dignissimos nobis aut eaque tempora minima natus ipsum corporis unde vero laborum corrupti reiciendis est, sunt aperiam? Assumenda ex possimus facere, quidem deserunt inventore.
      Veniam dolor officia sequi nulla ipsam sint quia magni distinctio ea, molestiae aliquam voluptates iste, atque maxime. Nesciunt minus assumenda sit at consequatur? Dicta, corporis. Illum culpa ratione labore cupiditate?
      Porro vel odio dolores magnam optio quisquam non perspiciatis fuga, eaque dolor! Unde, expedita voluptatibus reiciendis animi eius saepe recusandae voluptatum nulla libero asperiores quo accusamus corrupti, ipsam ad qui.
      Quos ducimus non nemo eum architecto harum asperiores! Quo, ratione sunt recusandae laudantium soluta accusamus, nesciunt eum laboriosam obcaecati nostrum veritatis. Debitis reprehenderit architecto quo dignissimos placeat saepe aperiam voluptatem!
      Error ipsam labore aut earum cum odit modi dolorem quis suscipit voluptate ducimus eveniet, repellat iusto a et. Reprehenderit praesentium delectus aperiam saepe quia placeat sunt aspernatur, autem similique enim.
      Fugit facere aut nostrum aliquid consequuntur quo ea magnam aperiam culpa? Adipisci et quibusdam placeat mollitia corporis, esse sunt perspiciatis excepturi magnam eligendi suscipit nobis natus id voluptates alias? Laboriosam.
      Sunt doloremque impedit velit quod. Eum excepturi perferendis veritatis voluptate facilis animi cum ipsum dicta. A dolores laboriosam dignissimos, facere, autem nostrum dicta quisquam enim provident aperiam, recusandae esse vel!
      Ducimus, in necessitatibus perferendis qui assumenda pariatur corporis fugiat? Odio necessitatibus quisquam, aliquam optio amet in natus voluptatum, similique alias aspernatur nam rem quos ab placeat voluptatibus officia atque sit!
      Dicta iusto officiis quaerat ab magni accusantium incidunt asperiores, culpa dolore aliquid reiciendis adipisci porro. Perspiciatis, reiciendis quas mollitia vel laudantium odio commodi rem itaque officia similique rerum quaerat sint.
      Officia ab, repellendus quasi incidunt sed assumenda libero, aperiam doloremque nemo perspiciatis natus placeat omnis quam quibusdam rerum ipsa quo accusantium vitae iure ut aliquam consequuntur. Illum ullam voluptate numquam.
      Illum voluptatibus perspiciatis blanditiis nisi ut accusamus? Nulla atque, cupiditate itaque dignissimos maxime nostrum at quidem eaque rem! Odio autem nostrum nihil adipisci, iure ullam! Amet accusantium animi excepturi ab!
      Non, dolor veniam officia, labore eius blanditiis maxime repellendus facere, facilis nisi officiis quasi nemo illo consectetur adipisci pariatur! Sunt, molestiae dolores! Saepe, distinctio provident! Rerum amet maiores fugit provident?
      Quam unde saepe, dolorem dignissimos doloribus porro perspiciatis, ab fuga distinctio eveniet nemo hic consectetur eligendi molestias dicta, quia sint voluptatem exercitationem. Voluptate vero repellat placeat vitae deserunt neque delectus.
      Nam distinctio reiciendis autem corporis adipisci voluptate alias inventore. Fugiat dignissimos, ipsa culpa illum quasi tempora iure non doloremque vel magnam sunt maxime? Reiciendis sequi provident ipsam distinctio odio debitis!
      Maxime tempora nihil ullam inventore excepturi eaque sunt, eveniet, laudantium recusandae esse labore, consequatur quo consectetur laborum odit? Molestias, natus explicabo minima est nobis earum vero laborum recusandae dolore nemo!
      Exercitationem, aperiam? Cupiditate ex eveniet doloremque in, debitis sequi iste fugiat blanditiis fugit voluptates, sed iure sit. Amet commodi odio consequatur aut, blanditiis, eius dicta quos pariatur quis adipisci recusandae!
      Voluptates nesciunt iure eaque minima veritatis saepe non modi inventore iste repudiandae voluptate, pariatur mollitia perferendis eveniet dolores necessitatibus, dignissimos quos impedit? Veritatis libero expedita ut at. Incidunt, sint eligendi.
      Voluptas magnam expedita dolorum explicabo. Quidem facere vel distinctio molestiae, vero ipsum voluptate libero perferendis beatae reiciendis optio cupiditate temporibus dicta et a delectus sunt provident incidunt enim dolore alias.
      Nulla eos consequuntur similique, qui totam sit, laudantium sequi veritatis voluptate sunt aliquam reiciendis ex ipsum veniam debitis, perferendis beatae fuga odio dicta quibusdam hic delectus deserunt provident placeat? Provident.
      Consectetur necessitatibus facere, iusto id adipisci inventore repudiandae cupiditate accusamus qui sed quaerat fugiat itaque officia eaque magnam illum tenetur commodi beatae. Consequatur laudantium odio, voluptates enim dolor doloremque fuga!
      Explicabo recusandae, dignissimos officiis, laboriosam nisi veritatis non voluptates vero sequi velit minima hic, quas soluta magni animi. Illum facilis id laborum earum hic. Labore, accusantium. Repellat minima voluptatum praesentium.
      Mollitia voluptates nulla velit laudantium. Laborum impedit ad minus. Quisquam veniam saepe ipsum facere architecto aperiam, est porro voluptas dolores inventore nulla deserunt eius placeat itaque aliquid, cumque possimus totam.
      Possimus, optio molestiae eius ipsum nemo illo eos praesentium temporibus porro, voluptatibus eaque quis saepe. Quod repellat optio eveniet iste eos ipsa culpa incidunt. Laboriosam, iste? Atque placeat laborum expedita.
      Doloremque voluptatibus assumenda modi eveniet nulla iure quia distinctio, possimus neque voluptatum quidem accusantium perspiciatis maxime odio, officia minima consequatur dolor quam nobis! Fugit voluptas asperiores deleniti! Necessitatibus, ducimus quaerat.
      Odio suscipit incidunt quas asperiores totam ullam repellendus voluptates debitis obcaecati, quae dolorem consequuntur porro nulla. Quaerat vel a earum magni quam esse omnis officiis ducimus, at minus sint odio!
      Expedita facilis fugiat commodi corporis quisquam fuga laborum. Alias, eaque. Id ratione rerum doloribus perspiciatis eius est, possimus fugiat libero sequi iusto incidunt sit reprehenderit architecto veniam ducimus, dolorem non.
      Aliquam laudantium obcaecati repellendus vero, eaque officia suscipit at omnis quo harum quis quod, odit ipsam! Impedit incidunt deleniti facere, error delectus cum non magni qui perspiciatis adipisci veritatis cumque!
      Provident nesciunt, a consequatur mollitia in magnam vel cum assumenda obcaecati, ut fuga! At itaque deserunt praesentium, voluptatum eos saepe nisi eum aut nihil voluptatibus ducimus, laboriosam ratione dolorum velit?
      Ducimus laboriosam repellat soluta sed dolores eveniet omnis aliquid dignissimos. Ea doloremque placeat magni quas rerum quos ab, deleniti non? Praesentium deleniti tenetur sunt cum! Odio harum eius aliquid molestias?
      Qui modi soluta harum quisquam. Fugit repudiandae ad voluptatem autem enim eveniet iure iste, quasi earum. Ratione, laborum optio ex corporis in laboriosam quo hic soluta nemo iste qui repellendus!
      Recusandae fugiat minima veritatis velit eligendi illum cum quam ratione nulla ullam! Quo autem ullam itaque, repellendus atque, officia nostrum beatae ab recusandae eligendi mollitia cupiditate magni porro illum libero.
      Et voluptas odit nisi dolorum aliquid deleniti iste quidem! Corrupti suscipit temporibus maxime, aspernatur sequi labore aperiam sit fugit, optio ipsam magni ab ex quis fuga sint beatae. Inventore, exercitationem.
      Distinctio id iste magnam expedita enim ea qui possimus facilis neque nobis ad quae iusto maiores ipsa, quos minima temporibus. Minima dolorum adipisci ut iure. Id repellat ut dignissimos architecto?
      Officia odio dicta unde eaque. Dolorem numquam quaerat ex accusantium non officiis eos quae quis, necessitatibus perferendis voluptatem dolor quisquam unde aliquam earum ratione modi quibusdam ipsa veniam facilis! Laboriosam?
      Sit obcaecati velit iure deleniti corporis, blanditiis, voluptatem quisquam culpa, odit rerum dolorum quae ea ipsa reiciendis optio sed dolorem. Totam dolores ratione eius nobis, nam velit rem reiciendis vero.
      Quisquam sunt aliquid exercitationem nam maiores eum nulla impedit soluta cumque ipsa vero explicabo ad repudiandae, voluptas ut placeat id quo eligendi sint earum rem excepturi illo doloribus. Labore, illo.
      Blanditiis voluptatem, odit vitae doloribus quasi voluptate earum fugit officia dignissimos dolor, mollitia aperiam fuga ex, atque id. Quas saepe delectus provident quisquam soluta ea quibusdam expedita, ipsam exercitationem nisi.
      Distinctio aperiam minima cum quod magnam, et dolorem, nulla ducimus perspiciatis soluta est! Facilis eveniet nesciunt corporis, totam necessitatibus, et sit reprehenderit quidem, incidunt consequatur eaque dicta natus maiores dolorem.
      Exercitationem quam eaque dolorem, natus ipsa sunt adipisci corporis doloribus odio laboriosam obcaecati nisi unde nobis atque harum aliquam inventore porro voluptates officiis alias provident est, nulla debitis a. Numquam?
      A excepturi adipisci beatae, non deleniti eius nesciunt. Eum minima in dolores tempore beatae, minus sit fuga at adipisci rem, quo, natus dignissimos laboriosam fugit quae saepe ad tempora nihil.
      Ducimus ipsam modi rerum? Facilis numquam at veniam laudantium similique. Iusto impedit excepturi sequi perferendis rerum. Quae, perferendis officiis molestias beatae, dolor sapiente tempora corporis reiciendis in enim voluptatibus vitae!
      Non quam dolorum optio inventore eaque magnam temporibus fugit. Perspiciatis provident repellendus quo est recusandae aperiam odio molestiae impedit, laudantium corporis eos cum earum totam tempora atque aliquam praesentium saepe!
      Excepturi modi a amet fugiat iste. Alias doloremque modi itaque reiciendis assumenda ab illum vel quisquam, voluptatibus quos nemo expedita beatae quia placeat, consequuntur, enim incidunt repudiandae dolores sed nihil!
      Sint rem obcaecati minima eius! Impedit laudantium facere nobis eaque doloremque porro eum debitis earum aliquid hic repudiandae optio rem sit facilis consequatur a placeat, accusamus, cupiditate itaque numquam minus?
      Id tempore labore culpa esse illo, omnis quidem officia accusamus reprehenderit itaque illum nihil nisi quae alias aliquid enim eaque? Sunt placeat, repellat molestias quisquam ducimus eum. Quod, ipsa maxime.
      Modi totam commodi nihil nostrum aut dolor ex dignissimos velit nisi obcaecati provident autem, sed excepturi minus error asperiores alias cumque facere nam consequuntur! Nam labore veritatis odit et iusto!
      Possimus dolore officia aliquid, voluptates a soluta! Cum mollitia sapiente ullam. Voluptatum temporibus commodi fugiat, voluptatibus dolores quidem ipsum consectetur. Dolore et sequi minus cumque debitis cum, dolorum expedita ducimus.
      Facere, quae cum ea suscipit neque eligendi perferendis ipsam libero assumenda aliquam id consequuntur reiciendis animi, inventore non nemo vitae, qui doloremque fugiat temporibus explicabo molestiae! Maxime consequuntur itaque atque!
      Distinctio hic rem, aperiam deleniti, quibusdam modi numquam doloribus tenetur repellat eius, dolore dolores ratione tempora. Exercitationem, ex autem nobis similique cum explicabo beatae aspernatur quam delectus aliquam, dolorem alias!
      Esse dolorum dignissimos tempora deleniti, repudiandae officiis. Excepturi, commodi expedita? Aperiam quos iste quisquam labore dicta, sunt amet. Expedita quia fugit voluptatem debitis velit esse nobis molestiae dolore numquam officia!
      Tenetur corrupti voluptas nesciunt ex cum suscipit enim id distinctio harum mollitia repellat ullam pariatur odit beatae earum sunt fugiat facere, aspernatur in, debitis qui. Ad impedit odio officia ut!
      Iste obcaecati unde vel doloremque dolor explicabo exercitationem adipisci, enim voluptatem, quia provident excepturi cum alias, inventore perferendis dignissimos. Magni delectus iste adipisci facere laborum ipsa minima corporis omnis fugiat.
      Voluptatibus esse quasi natus. Facere vitae suscipit similique maiores temporibus. Obcaecati quas, nulla consequuntur explicabo unde magni earum assumenda perspiciatis, reprehenderit voluptatem et in iure suscipit sed provident vero! Maxime.
      Commodi quos deserunt officiis non quis voluptas officia dolor earum quae minus eligendi doloremque quam unde corrupti modi, nobis quisquam vitae numquam adipisci aperiam? Eos assumenda illo sapiente ea dolore.
      Eius ea velit voluptas, architecto modi tempora repellat impedit quos. Quisquam expedita eligendi facere sed maxime minima architecto molestiae accusantium voluptates, eaque deleniti illum reprehenderit cupiditate impedit natus. Rem, molestias.
      Ea dolorum voluptates porro odit sequi officia alias sit tempore ab reiciendis animi eligendi id voluptas corrupti, illo commodi harum enim, delectus iusto quo nesciunt? Porro nulla adipisci odit alias?
      Itaque ea est facere, eligendi aperiam debitis sed quia ipsa, reprehenderit deserunt nam quas voluptate, laboriosam quae veniam mollitia assumenda sint dolore nihil laudantium saepe expedita necessitatibus? Molestiae, asperiores accusamus!
      Praesentium, exercitationem perspiciatis tenetur blanditiis dolorum, molestiae, obcaecati similique accusamus perferendis aut natus facere at possimus atque. Placeat recusandae rem quas temporibus laudantium dolorum id soluta excepturi! Quasi, dolorum numquam.
      A magnam adipisci fugiat necessitatibus assumenda cupiditate error suscipit voluptate libero rem! Sint voluptatem iure iusto aliquam numquam, similique laudantium unde quis non laborum. Voluptatibus quam perspiciatis nisi aspernatur fugit.
      Hic, optio? Voluptate temporibus sint aperiam doloribus, quasi, molestias, eum quisquam eius excepturi exercitationem unde veritatis aliquid? Cum earum, hic facere totam recusandae assumenda? Sequi quas provident quod corrupti qui!
      Omnis rem expedita rerum magnam ratione dolores veniam quos necessitatibus quidem sint dolor dicta quasi, adipisci veritatis, nisi ab dolore cupiditate repellat, magni aliquid perferendis aut? Qui commodi adipisci mollitia?
      Quasi, cum asperiores harum quis eligendi ex assumenda corrupti ad aliquam rerum velit modi aliquid eaque quisquam commodi repudiandae, consequuntur sequi! Tenetur doloribus aliquam totam asperiores unde laudantium placeat praesentium.
      Et atque assumenda maiores corrupti facere aliquid dolores vel iusto, explicabo, quam similique, ipsum error ea animi molestiae aut deleniti voluptates sapiente laborum enim a eaque illum sequi! Quae, aliquam.
      Tempore repellat, amet explicabo non officia qui veniam rem ad sint ipsam error saepe a dicta alias dolore at molestias nesciunt vero illum omnis iure sunt perspiciatis ullam. Accusantium, adipisci?
      Quisquam beatae a nostrum alias vitae, ipsam deserunt amet, eum culpa iusto veniam delectus iste, aliquam dicta asperiores laborum! Libero doloremque quos cupiditate illum officia nisi dolorem iusto cumque modi!
      Nobis recusandae iure maxime nihil unde consequuntur amet, reprehenderit fuga omnis quidem accusamus voluptatibus ipsa rerum saepe ab sapiente modi a vel, qui perspiciatis reiciendis. In ab assumenda esse facilis!
      Sed quo assumenda vitae dolores non, mollitia inventore tenetur consequatur animi maiores rerum unde! Laborum voluptas ratione deserunt nulla, magni velit qui perspiciatis, nemo, reiciendis fugit temporibus impedit sit quod?
      Neque voluptas provident quos ducimus. Iure, similique veniam? Reiciendis, quis! Ea voluptatem fuga inventore optio, nihil neque obcaecati necessitatibus aperiam alias deserunt sed placeat quam debitis voluptate aspernatur pariatur saepe.
      Dignissimos, dolore nesciunt, accusamus distinctio enim inventore eius hic molestiae id ullam, magni ab sed tenetur labore quae? Non voluptates qui atque, sed numquam accusamus alias accusantium modi nostrum unde!
      Nobis quaerat expedita incidunt cum aut eligendi neque ipsum mollitia culpa ex recusandae pariatur fugit quos, placeat voluptatum minus natus eius? Aperiam, dolorem exercitationem saepe iusto laborum maxime delectus beatae.
      Sed, odit quod culpa cum, ullam quisquam fugit eligendi voluptate illo officiis, quas aliquam odio sapiente exercitationem commodi expedita laboriosam voluptates! Sed reiciendis ex unde cum expedita? Omnis, eius temporibus.
      Harum, ea architecto voluptatem sit necessitatibus ab maiores neque exercitationem veniam corrupti nesciunt quibusdam rerum maxime autem modi aliquam ratione! Architecto doloremque, dolore fugiat ducimus adipisci molestiae illum libero unde.
      Accusantium, corporis? Officia numquam similique sit. Ratione nesciunt debitis cupiditate est, excepturi alias obcaecati quasi veniam totam necessitatibus sequi minima iusto? Facere, ducimus a. Sed praesentium exercitationem maiores vel non!
      Corrupti, aut! Blanditiis nobis beatae, incidunt quibusdam eaque aspernatur laboriosam numquam temporibus officiis rerum praesentium assumenda fugit animi consequuntur voluptatum vitae nemo odit quam! At perspiciatis quisquam nemo illo dolores.
      Eaque quis aliquid dignissimos culpa facere repudiandae laboriosam! Quidem magni praesentium voluptate. Eum vel voluptatibus voluptatem, alias veritatis blanditiis debitis excepturi fugit ipsa. Laudantium, deleniti deserunt dicta repellendus doloremque quia?
      Nemo ipsum, harum similique assumenda corrupti facere. Iusto doloremque recusandae debitis animi tenetur dolorem aperiam accusantium temporibus consectetur, quas beatae ea. Ipsam praesentium quisquam quaerat, sed dignissimos modi? Vel, ab.
      Modi ipsam expedita recusandae excepturi nesciunt dolorum ea aliquid. Sapiente numquam nulla impedit tempora? Corrupti ea nostrum vel necessitatibus magnam fugiat doloribus, iure, nam commodi quasi enim placeat nesciunt. Amet?
      Autem delectus aperiam repudiandae non, similique fugiat iure illo sed eaque, sunt explicabo ut voluptates praesentium quam aliquam minima blanditiis ullam? Impedit, cupiditate! Quidem consectetur voluptate itaque ducimus inventore neque.
      A libero commodi nam eveniet rerum nihil rem molestias tempore aperiam magni atque, sequi, ex beatae excepturi voluptates consectetur. Molestiae, error odio. Praesentium voluptatibus aperiam repellendus eos dolor odio suscipit.
      Numquam consectetur ad nulla nam vitae deserunt sit, fugiat at fugit obcaecati, ab illum eos voluptatibus doloremque saepe pariatur excepturi rerum magni quisquam neque sunt incidunt facere? Fugiat, quod ratione.
      Qui officiis sint ipsa nesciunt eum libero magni suscipit delectus amet? Aliquam, esse necessitatibus expedita deserunt rem accusamus itaque placeat eum ducimus blanditiis tempora laborum dolorum! Vitae aliquam non fugit!
      Incidunt pariatur quasi tempora ratione labore distinctio? Delectus, sequi, cumque ipsa soluta deserunt, eos natus omnis suscipit blanditiis repudiandae ipsum assumenda reiciendis. Modi fugiat quidem facilis. Non alias voluptates quis?
      Illo, a expedita tempore cumque, sunt est labore, magnam placeat modi non incidunt! Dolorum sunt cum debitis adipisci, unde necessitatibus quaerat sapiente pariatur, minus ratione sequi iusto, earum maxime enim.
      Consectetur provident ipsa ipsum minus quae tenetur aut nihil molestiae? Recusandae, quod, cumque pariatur quos error nam, aliquid fugit esse quo quasi ex impedit delectus totam alias. Numquam, nemo illum?
      Culpa quia, porro magnam non dolorum ullam animi. Numquam soluta officiis tempora provident minima ullam a dolor eos, saepe ad voluptates voluptatem! Magnam rerum amet autem assumenda? Quidem, consectetur iste?
      Voluptatum facere sunt soluta. Est neque tempore, aspernatur sapiente praesentium atque nesciunt doloribus corporis fugiat dolor maxime, nemo expedita, deserunt sit consequuntur provident exercitationem? Voluptatum nam eveniet magnam saepe ipsa.
      </Text> */}
      </ScrollView>
    </ScrollView>
  );
};

export default explore;

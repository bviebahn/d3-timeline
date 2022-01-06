import { PointEvent, SpanEvent } from "./types";

const data = [
  {
    id: "0x8b0AeC8b25E9f78a1b3Fad00aF1370E1",
    title: "aut et",
    text: "Inventore qui et doloribus quis nobis voluptatum eos asperiores. Consequuntur eius sed. Eaque occaecati nulla saepe eos et. Sint sunt quia dolorem consequatur magnam aliquid nulla velit voluptate. Quidem et soluta impedit reprehenderit ut est deserunt debitis quod.",
    start: "1924-08-18T19:18:30.722Z",
    end: "1936-07-26T16:01:37.627Z",
    weight: 2,
    imageUrl:
      "https://picsum.photos/seed/0x8b0AeC8b25E9f78a1b3Fad00aF1370E1/640/480",
  },
  {
    id: "0xD706d83aaa2Fd1aa524BCAdB4e3D0A82",
    title: "nobis molestiae cumque totam neque",
    text: "Et amet est dolorem. Et nam ut facere atque magni omnis dolorum et perferendis. At voluptatem eius sint incidunt.",
    start: "1893-07-11T19:45:16.295Z",
    end: "1900-03-30T14:03:02.845Z",
    weight: 3,
    imageUrl:
      "https://picsum.photos/seed/0xD706d83aaa2Fd1aa524BCAdB4e3D0A82/640/480",
  },
  {
    id: "0xeDd96E3eae0C1e9e5654eB0AE0A31A3d",
    title: "aut autem temporibus quas",
    text: "Veniam laboriosam soluta modi soluta architecto pariatur consequuntur dolore et. Quas rerum doloremque ut rerum omnis perspiciatis magni qui. Omnis voluptatem ut.",
    start: "1994-09-08T04:49:10.716Z",
    end: "1996-11-10T09:23:00.802Z",
    imageUrl:
      "https://picsum.photos/seed/0xeDd96E3eae0C1e9e5654eB0AE0A31A3d/640/480",
  },
  {
    id: "0xAc4F4336f5eADcD2EEab3c4Ea43f23E9",
    title: "qui qui adipisci earum neque",
    text: "Voluptatem expedita nemo est dolor blanditiis dolorem ullam. Cumque ut asperiores. Explicabo quas voluptatem qui voluptatem quibusdam. Reiciendis ea alias qui.",
    start: "1924-04-23T11:01:49.496Z",
    end: "1937-06-24T10:29:45.811Z",
    weight: 2,
    imageUrl:
      "https://picsum.photos/seed/0xAc4F4336f5eADcD2EEab3c4Ea43f23E9/640/480",
  },
  {
    id: "0xbe208F8fcBe9F5d701dcB5c641bcdFEc",
    title: "est aut itaque aperiam id facere",
    text: "Consequatur reiciendis molestiae ut. Nisi est est fuga laborum et deserunt et consequuntur nulla. Omnis deserunt temporibus quidem quam voluptas blanditiis et sed enim. Amet necessitatibus itaque. Quam distinctio a vero nesciunt sed ut.",
    start: "1917-10-10T10:28:13.772Z",
    weight: 5,
    end: "1922-08-22T14:21:36.201Z",
    imageUrl:
      "https://picsum.photos/seed/0xbe208F8fcBe9F5d701dcB5c641bcdFEc/640/480",
  },
  {
    id: "0x4B107bB3A6Ccbf8efCe8ee0bbc7e5EAE",
    title: "et",
    text: "Doloremque optio iste sed aliquam. Non et iusto fugit. Nam id ut facere tempore hic aut qui.",
    start: "1866-08-31T21:52:03.772Z",
    end: "1866-11-04T15:08:58.784Z",
    weight: 2,
    imageUrl:
      "https://picsum.photos/seed/0x4B107bB3A6Ccbf8efCe8ee0bbc7e5EAE/640/480",
  },
  {
    id: "0xBB0fbDC8a28EA2fA62b2bc26bf8fcdcd",
    title: "quia est ratione",
    text: "Asperiores ad dolorum ut temporibus porro. Voluptate vero rerum quasi explicabo et. Modi enim accusamus et aliquam delectus deserunt possimus.",
    start: "1837-01-12T18:26:07.655Z",
    end: "1852-11-03T23:20:04.674Z",
    weight: 3,
    imageUrl:
      "https://picsum.photos/seed/0xBB0fbDC8a28EA2fA62b2bc26bf8fcdcd/640/480",
  },
  {
    id: "0x6a0812CFD3Dd70cEcb9DDEAc7D4AE049",
    title: "aperiam consequatur et doloribus",
    text: "Dolores quas aut voluptatibus. Aut quam alias reprehenderit nam voluptatem quis. Saepe facilis maxime ipsa architecto nihil incidunt aut optio id. Hic est et architecto qui ullam voluptatibus ut aut aliquam. Quasi facilis quibusdam laborum voluptatem dolor quasi nostrum.",
    start: "1826-02-25T01:19:26.683Z",
    end: "1846-08-15T16:24:14.863Z",
    weight: 6,
    imageUrl:
      "https://picsum.photos/seed/0x6a0812CFD3Dd70cEcb9DDEAc7D4AE049/640/480",
  },
  {
    id: "0xFb49dd0cf186B6CAFD0DDBcCdDAaaCa3",
    title: "tempora eveniet quia rerum sed fuga",
    text: "Corporis molestiae minus. Quia dolorem sit ut cupiditate soluta velit officiis ut. Nemo qui voluptatem est voluptatum ipsum laborum temporibus fugiat quae. Consequatur possimus iusto sit commodi nobis debitis deserunt. Blanditiis est sit.",
    start: "1847-07-04T06:48:34.859Z",
    end: "1862-07-07T06:55:19.221Z",
    weight: 3,
    imageUrl:
      "https://picsum.photos/seed/0xFb49dd0cf186B6CAFD0DDBcCdDAaaCa3/640/480",
  },
  {
    id: "0x1C87Ae2daca3AbE35FCCaae1d201F196",
    title: "quia et eius",
    text: "Labore dolores quasi molestiae praesentium ullam non suscipit. Enim illo vel rerum at nostrum quia sit voluptas. Qui quis tempore odit ad aut aut quibusdam voluptas nostrum. Voluptatem eligendi pariatur aut molestiae. Et provident recusandae.",
    start: "1909-08-03T12:12:29.871Z",
    end: "1925-09-14T01:58:27.028Z",
    weight: 2,
    imageUrl:
      "https://picsum.photos/seed/0x1C87Ae2daca3AbE35FCCaae1d201F196/640/480",
  },
  {
    id: "0x98CcCA2bA17D3609C28CDe4b11be642F",
    title: "rerum",
    text: "Praesentium dolore ipsum dolorum explicabo ut qui et tempora. Dolorem autem sunt cum id. Possimus et ea fugit quos. Necessitatibus eligendi laboriosam.",
    start: "1982-11-30T19:57:38.847Z",
    end: "1989-08-08T08:16:06.104Z",
    weight: 4,
    imageUrl:
      "https://picsum.photos/seed/0x98CcCA2bA17D3609C28CDe4b11be642F/640/480",
  },
  {
    id: "0xab0D1071d3dFA8ccb8eEd2BE574BcfE6",
    title: "est nihil",
    text: "Qui voluptate numquam hic velit sed. Qui necessitatibus reiciendis rerum nihil harum. Mollitia non ut et quasi corporis. Omnis asperiores voluptas veniam aut omnis cum officiis voluptas. Et est qui et architecto quia.",
    start: "1836-10-14T02:28:28.008Z",
    end: "1851-12-19T08:48:24.621Z",
    weight: 6,
    imageUrl:
      "https://picsum.photos/seed/0xab0D1071d3dFA8ccb8eEd2BE574BcfE6/640/480",
  },
  {
    id: "0x4aEdCcfCCF85BFbe8Fbdacd7C3bCAda9",
    title: "doloremque",
    text: "Nihil distinctio aut quia. Ipsa et quam molestias maiores ipsam numquam quis voluptatem. Sint blanditiis voluptatem est maiores dolore rerum vel nesciunt. Animi incidunt rerum sed ut cupiditate. Repudiandae qui vitae unde quisquam.",
    start: "1875-08-03T00:21:12.853Z",
    end: "1896-03-12T05:49:17.376Z",
    weight: 7,
    imageUrl:
      "https://picsum.photos/seed/0x4aEdCcfCCF85BFbe8Fbdacd7C3bCAda9/640/480",
  },
  {
    id: "0x83dACF0ce4765C98Fb0B108C51AFcdDB",
    title: "accusantium deleniti deleniti soluta",
    text: "Esse aut sapiente voluptatem consequatur. Earum modi sit. Et enim aut nulla dolores velit culpa nihil. Natus aut quo et magni quae neque perferendis. Asperiores non quaerat soluta earum natus corrupti.",
    start: "1914-11-16T02:36:30.711Z",
    end: "1925-01-02T11:03:24.435Z",
    weight: 5,
    imageUrl:
      "https://picsum.photos/seed/0x83dACF0ce4765C98Fb0B108C51AFcdDB/640/480",
  },
  {
    id: "0x8bdd9cc8CB1Fa05A1F9a91Cf5EFa4ac6",
    title: "ipsam cum maxime",
    text: "Autem non nulla consectetur aliquid ut et dolor voluptas. Provident aut possimus eveniet et voluptatem blanditiis sunt et omnis. Reprehenderit animi rem iusto libero in magnam excepturi placeat. Molestias id aut vero aut sit. Quae laudantium at consequuntur laboriosam. Et et quos nulla officiis dolorum aut sit.",
    start: "1864-06-15T04:39:15.976Z",
    end: "1890-02-07T04:50:52.453Z",
    weight: 7,
    imageUrl:
      "https://picsum.photos/seed/0x8bdd9cc8CB1Fa05A1F9a91Cf5EFa4ac6/640/480",
  },
  {
    id: "0xdA2b4A77eef9e64Cdaa9EaFf3f97AaB4",
    title: "assumenda non ad possimus est dolorum",
    text: "Assumenda omnis aliquam autem occaecati vero. Distinctio perspiciatis et deserunt incidunt exercitationem nihil explicabo. Aperiam ipsa velit. Deleniti et perferendis dolores odit aut aliquid vel magnam. Non iusto pariatur laboriosam exercitationem odit. Nihil cumque ut ut est deleniti.",
    start: "1988-07-02T21:06:04.052Z",
    end: "1990-04-08T16:03:46.951Z",
    weight: 5,
    imageUrl:
      "https://picsum.photos/seed/0xdA2b4A77eef9e64Cdaa9EaFf3f97AaB4/640/480",
  },
  {
    id: "0xDEF219832ED30abd33AB6a16ea56ded9",
    title: "error exercitationem atque qui",
    text: "Aut hic ab ut porro nisi occaecati fuga ut. Dolores atque est ut debitis. Eos eum voluptas earum adipisci ea quia recusandae nulla enim. Qui at architecto et. Aut nulla placeat cupiditate perferendis perspiciatis beatae et. Id natus non.",
    start: "1978-08-08T18:52:30.859Z",
    end: "1979-08-05T05:54:49.327Z",
    weight: 2,
    imageUrl:
      "https://picsum.photos/seed/0xDEF219832ED30abd33AB6a16ea56ded9/640/480",
  },
  {
    id: "0x4d2fbf0ECD3b143e6BCAD4469cD56ebE",
    title: "est eius vel",
    text: "Mollitia magnam excepturi officiis repellendus. Optio quibusdam eaque enim eius aut laboriosam impedit. Sed sapiente occaecati. Natus assumenda sunt et.",
    start: "1906-06-05T21:08:25.695Z",
    end: "1912-10-23T07:01:06.035Z",
    weight: 2,
    imageUrl:
      "https://picsum.photos/seed/0x4d2fbf0ECD3b143e6BCAD4469cD56ebE/640/480",
  },
  {
    id: "0xBeEecE91baBFceaE4b53368fB6B8A93b",
    title: "tempore ut aut assumenda sit accusamus",
    text: "Neque sed sunt fugit. Inventore in qui quia sapiente veritatis. Quas impedit ut.",
    start: "1889-02-03T07:14:56.064Z",
    end: "1900-07-26T01:45:08.290Z",
    weight: 3,
    imageUrl:
      "https://picsum.photos/seed/0xBeEecE91baBFceaE4b53368fB6B8A93b/640/480",
  },
  {
    id: "0x6B2ccF9a01DdB8cc3FC8fF0C196Fe3dA",
    title: "sit velit",
    text: "Maxime ab adipisci placeat eum tenetur. Vel nulla aut cum quia inventore aut est aliquam sint. Nihil at quis aspernatur quidem. Voluptates et praesentium consequatur. Cupiditate ut et corporis id eos voluptas quaerat laudantium id. Hic ipsa officiis sed est.",
    start: "1948-11-19T13:58:22.547Z",
    end: "1949-05-24T12:27:38.525Z",
    weight: 4,
    imageUrl:
      "https://picsum.photos/seed/0x6B2ccF9a01DdB8cc3FC8fF0C196Fe3dA/640/480",
  },
  {
    id: "0xbB0CdBe51d6e2A5A2f579fEfAfEdBe0E",
    title: "facilis sed",
    text: "Dolor dolor aut ipsam totam vel qui voluptates. Voluptatem laboriosam autem expedita cum quia optio. Odit minus ducimus necessitatibus sint asperiores assumenda eaque consectetur sed. Eos quas est saepe. Totam consequatur sunt vitae occaecati.",
    start: "1872-02-16T10:44:21.193Z",
    end: "1885-03-04T17:28:34.021Z",
    weight: 3,
    imageUrl:
      "https://picsum.photos/seed/0xbB0CdBe51d6e2A5A2f579fEfAfEdBe0E/640/480",
  },
  {
    id: "0x58638E8eb4f5b031Ee2b2d2E0dF15A25",
    title: "a molestias fugiat dicta",
    text: "Dolor explicabo rem voluptate nam. Harum eveniet sint. Qui et quibusdam sed. Expedita labore aspernatur dolores voluptas magni. Sunt nobis rerum ut minus illo quia reprehenderit et delectus. Omnis id dolor voluptatibus earum.",
    start: "1965-05-20T20:22:03.913Z",
    end: "1967-12-28T03:37:26.885Z",
    weight: 2,
    imageUrl:
      "https://picsum.photos/seed/0x58638E8eb4f5b031Ee2b2d2E0dF15A25/640/480",
  },
  {
    id: "0xC40eE1Dd671d5d48C5Ccacb5A65035Cb",
    title: "quo voluptas quis placeat et architecto",
    text: "Error dolore magnam eum odio earum ipsum. Laborum aspernatur placeat eaque. Porro omnis voluptas officiis quod nihil soluta. A dolorum pariatur est nobis dolores ut quisquam. Iste ab omnis accusamus.",
    start: "1868-04-26T03:44:40.408Z",
    end: "1893-08-01T07:43:03.941Z",
    weight: 2,
    imageUrl:
      "https://picsum.photos/seed/0xC40eE1Dd671d5d48C5Ccacb5A65035Cb/640/480",
  },
  {
    id: "0xd4aC70d22FF09Aab236Ff8E0B2414ECf",
    title: "vero aperiam praesentium non",
    text: "Nihil ea soluta. Quasi dolores dicta ipsa quis ullam aperiam ut dolor. Animi maiores unde autem necessitatibus eaque et qui qui nesciunt. Placeat possimus et qui repellendus ipsum nobis aut sed.",
    start: "1934-07-10T13:19:19.068Z",
    end: "1947-01-19T18:07:38.572Z",
    weight: 4,
    imageUrl:
      "https://picsum.photos/seed/0xd4aC70d22FF09Aab236Ff8E0B2414ECf/640/480",
  },
  {
    id: "0xeE2AE6F7f2765d8b2f1bA6d4AaD23dEb",
    title: "et",
    text: "Ab qui et voluptatem quo esse. Aliquam quibusdam provident sint. Nihil quo magni id est quis. Veniam impedit possimus libero animi corporis corporis. Ab modi aut.",
    start: "1981-04-26T05:38:02.352Z",
    end: "1988-04-28T12:57:46.085Z",
    weight: 3,
    imageUrl:
      "https://picsum.photos/seed/0xeE2AE6F7f2765d8b2f1bA6d4AaD23dEb/640/480",
  },
  {
    id: "0xa47DfBde5C3bE732668C8bcFedEbA26f",
    title: "exercitationem rerum dolore numquam",
    text: "Omnis neque animi recusandae laudantium. Quis ipsam ut qui ratione. Minus et omnis exercitationem blanditiis eaque. Quia atque eum at et iure pariatur saepe. Ipsam quia dignissimos dolor dolores et ad aut sequi quo.",
    start: "1916-06-26T12:03:41.292Z",
    end: "1920-09-02T01:26:44.043Z",
    imageUrl:
      "https://picsum.photos/seed/0xa47DfBde5C3bE732668C8bcFedEbA26f/640/480",
  },
  {
    id: "0xA4C7Ce302F787EC8a1fcCacB99bDa1eC",
    title: "et laborum",
    text: "Eos soluta illo odio. Voluptatem quis accusamus quaerat accusamus voluptatem id. Accusantium totam perspiciatis iusto ratione sit quis. Earum ratione sed. Quis beatae sint vel itaque veniam iure non autem. Autem qui modi et.",
    start: "1988-02-21T08:48:09.700Z",
    end: "1992-10-07T20:04:53.607Z",
    imageUrl:
      "https://picsum.photos/seed/0xA4C7Ce302F787EC8a1fcCacB99bDa1eC/640/480",
  },
  {
    id: "0x48F3Fe0A3E9a7c469F442c2DDD2e1BcE",
    title: "quibusdam quidem",
    text: "Aspernatur quaerat porro praesentium. Incidunt consequatur quia. Mollitia necessitatibus mollitia sequi. Harum molestiae fugit nobis ipsum voluptates rerum quidem repellat inventore. Et animi blanditiis aut architecto at et ut rem. Aut aut adipisci debitis dolore cupiditate repudiandae eum nisi.",
    start: "1930-06-14T00:35:59.193Z",
    end: "1940-06-05T04:30:40.836Z",
    imageUrl:
      "https://picsum.photos/seed/0x48F3Fe0A3E9a7c469F442c2DDD2e1BcE/640/480",
  },
  {
    id: "0x3Cb0d0f21dBaB533FAADA494E94ebbC3",
    title: "excepturi ex",
    text: "Quibusdam ullam exercitationem. Nobis voluptatem assumenda non perferendis possimus iure aut ullam nulla. Totam non et qui sunt magnam quo asperiores necessitatibus. Quo eligendi enim laudantium asperiores. Rem qui tempora repellendus sapiente totam ut fugit voluptatibus. Sunt nostrum rem voluptatem in quia sed tempore ut.",
    start: "1993-02-21T05:16:52.328Z",
    end: "1998-08-23T04:22:57.281Z",
    imageUrl:
      "https://picsum.photos/seed/0x3Cb0d0f21dBaB533FAADA494E94ebbC3/640/480",
  },
  {
    id: "0x2DA1Ff3BdAfAc01F429aB16A42FfE30A",
    title: "quia dolorem quisquam dolorem corrupti",
    text: "Autem exercitationem rem id ullam sapiente non repellat. Dolorum veritatis consequatur et minus cupiditate. Et voluptas sed qui distinctio ut quam.",
    start: "1984-03-16T13:02:43.860Z",
    end: "1986-07-06T06:57:30.031Z",
    imageUrl:
      "https://picsum.photos/seed/0x2DA1Ff3BdAfAc01F429aB16A42FfE30A/640/480",
  },
  {
    id: "0xAD4a0194Dc6f3DDdBCC8B159F7368ef2",
    title: "beatae in",
    text: "Quaerat dolores aut sed molestias sunt consequatur voluptate ipsum omnis. Placeat delectus ratione sequi. Aspernatur ipsam est sed tenetur. Repellendus ut aut necessitatibus accusamus odio. Consequatur nihil rerum accusamus nostrum mollitia soluta consectetur tempore voluptatem.",
    start: "1893-06-26T06:05:33.595Z",
    end: "1911-05-14T06:08:24.588Z",
    imageUrl:
      "https://picsum.photos/seed/0xAD4a0194Dc6f3DDdBCC8B159F7368ef2/640/480",
  },
  {
    id: "0xfF3F30cB1F06EB25B613539ba1Ec0cFc",
    title: "animi natus",
    text: "Voluptatem sint repellendus recusandae et quos. Quia in ut reprehenderit nemo. Officiis et porro quaerat. Velit reprehenderit dolores temporibus deserunt recusandae in magni quaerat aut. Non dignissimos aperiam aliquid voluptatum voluptatem cumque perferendis.",
    start: "1958-02-17T22:11:07.219Z",
    end: "1960-11-26T18:02:26.388Z",
    imageUrl:
      "https://picsum.photos/seed/0xfF3F30cB1F06EB25B613539ba1Ec0cFc/640/480",
  },
  {
    id: "0xE81302ddfc55ffF4DcfE657bdAEbfACe",
    title: "ut autem ullam rem",
    text: "Cum quia iste incidunt quam. Fugiat non saepe. Velit suscipit aut veniam quae quibusdam.",
    start: "1982-12-29T01:20:25.128Z",
    end: "1987-02-20T08:14:26.299Z",
    imageUrl:
      "https://picsum.photos/seed/0xE81302ddfc55ffF4DcfE657bdAEbfACe/640/480",
  },
  {
    id: "0x405DbEEda07bA04F35dd79d062a486aD",
    title: "vel est eius",
    text: "Dolorem alias soluta. Sed molestias dolorem tempore ipsam voluptates. Blanditiis alias expedita dolores eveniet dignissimos ut eum.",
    start: "1915-11-11T21:04:21.748Z",
    end: "1936-09-02T20:25:18.166Z",
    imageUrl:
      "https://picsum.photos/seed/0x405DbEEda07bA04F35dd79d062a486aD/640/480",
  },
  {
    id: "0xd8EBB2Dfe485dDD18EB28Fb0DD9550BC",
    title: "in ut quia odit aut",
    text: "Est expedita totam molestiae ut. Nisi eos consequuntur beatae nostrum voluptatem. Commodi neque harum possimus odit enim excepturi facere animi. Excepturi similique est veritatis odio et magni doloribus. Reprehenderit adipisci recusandae facere dolor saepe cum ut ipsum.",
    start: "1830-02-22T13:32:50.851Z",
    end: "1838-01-21T05:48:40.570Z",
    imageUrl:
      "https://picsum.photos/seed/0xd8EBB2Dfe485dDD18EB28Fb0DD9550BC/640/480",
  },
  {
    id: "0xDe087bBABF30cc104fDC4FB9A0bFC933",
    title: "perspiciatis in est",
    text: "Magni porro atque odio est quidem. Voluptatem magni totam. Autem enim maiores eius.",
    start: "1829-02-26T12:48:01.864Z",
    end: "1861-09-19T20:17:44.943Z",
    imageUrl:
      "https://picsum.photos/seed/0xDe087bBABF30cc104fDC4FB9A0bFC933/640/480",
  },
  {
    id: "0xA3d15ACf22aeF2Fcaec318e63fdbB3e8",
    title: "doloribus",
    text: "Non eligendi nam. Veniam ex voluptatum consequatur cumque tempora. Qui blanditiis at consequatur dolorum sapiente quo corporis tempora.",
    start: "1854-05-08T13:52:28.560Z",
    end: "1869-10-16T16:11:10.413Z",
    imageUrl:
      "https://picsum.photos/seed/0xA3d15ACf22aeF2Fcaec318e63fdbB3e8/640/480",
  },
  {
    id: "0xAaCedd8486Ec3EA00EcE423050A9ac5c",
    title:
      "nihil exercitationem illo saepe eligendi possimus",
    text: "Debitis aut repudiandae nulla dolorum aut. Cum natus vitae dolor incidunt qui nemo expedita incidunt odit. Facere facere quod vero delectus a ullam illum earum non. Modi quia magni distinctio consequatur quo ab. Est in enim nemo et commodi.",
    start: "1884-05-06T07:47:46.048Z",
    end: "1901-12-01T19:39:50.835Z",
    imageUrl:
      "https://picsum.photos/seed/0xAaCedd8486Ec3EA00EcE423050A9ac5c/640/480",
  },
  {
    id: "0x6a74A4F4ABcfe0E8c1D8eA3fefcb8edB",
    title: "molestiae aliquid",
    text: "Rem aut iure amet eligendi id sapiente. Natus exercitationem dolorum. Alias ea quia omnis laudantium.",
    start: "1886-02-14T09:58:09.543Z",
    end: "1897-11-22T21:39:16.229Z",
    imageUrl:
      "https://picsum.photos/seed/0x6a74A4F4ABcfe0E8c1D8eA3fefcb8edB/640/480",
  },
  {
    id: "0xc7c39E29dAE2454D0ecf6DA56AA0ed5b",
    title: "ipsam deserunt delectus",
    text: "Labore ut inventore. Voluptatum impedit neque iusto autem velit eos doloribus ratione tempore. Nam vitae consequuntur iure eos perspiciatis.",
    start: "1976-06-21T17:59:00.673Z",
    end: "1978-08-09T19:26:01.869Z",
    imageUrl:
      "https://picsum.photos/seed/0xc7c39E29dAE2454D0ecf6DA56AA0ed5b/640/480",
  },
  {
    id: "0xf6bBD6ded1C454adEa17ba32fC24d2FB",
    title: "repudiandae ut",
    text: "Beatae quia dolores qui qui consequatur. Aperiam et autem et sit est incidunt sunt. Maiores molestiae voluptates distinctio sed et.",
    start: "1913-11-26T09:14:57.175Z",
    end: "1915-09-28T04:03:13.572Z",
    imageUrl:
      "https://picsum.photos/seed/0xf6bBD6ded1C454adEa17ba32fC24d2FB/640/480",
  },
  {
    id: "0xD3A4AD1Bd0b0AdC13ac566BC47Dde7F9",
    title: "quis aut",
    text: "Voluptas magni sapiente. Id dolores repellendus possimus nulla in eveniet. Maiores non atque dignissimos. Atque doloremque quibusdam sit est rerum rerum.",
    start: "1855-05-08T14:42:59.506Z",
    end: "1860-06-23T23:57:48.169Z",
    imageUrl:
      "https://picsum.photos/seed/0xD3A4AD1Bd0b0AdC13ac566BC47Dde7F9/640/480",
  },
  {
    id: "0xE0894E9F6b0e4f5eb8fb7d1D62DcB1bc",
    title: "doloribus quam impedit",
    text: "Quia in illum sapiente illum. Quas quis officia facilis. Ab laboriosam nisi inventore voluptatem. Consectetur debitis distinctio repellendus. Voluptatum inventore inventore.",
    start: "1943-09-25T06:34:46.808Z",
    end: "1945-03-13T22:25:00.663Z",
    imageUrl:
      "https://picsum.photos/seed/0xE0894E9F6b0e4f5eb8fb7d1D62DcB1bc/640/480",
  },
  {
    id: "0xDc8A84fBd61C774C1710b5992aE69D8F",
    title: "praesentium",
    text: "Velit accusantium totam et sit magni. Maxime quia at culpa accusantium eum. Itaque nihil omnis ipsam repellendus non quae architecto ratione unde.",
    start: "1921-02-15T08:28:26.852Z",
    end: "1931-06-04T17:48:02.376Z",
    imageUrl:
      "https://picsum.photos/seed/0xDc8A84fBd61C774C1710b5992aE69D8F/640/480",
  },
  {
    id: "0xaa39EECDFee2AE7D37C2C9A08D2D5cd2",
    title: "temporibus",
    text: "Dignissimos nam aliquid doloribus et. Repellendus numquam sint perferendis modi et repellat accusantium autem. Molestias repellendus necessitatibus ex ullam animi eaque sit est est. Magni et temporibus voluptas sint illum.",
    start: "1880-09-16T21:07:47.442Z",
    end: "1907-02-22T12:45:41.563Z",
    imageUrl:
      "https://picsum.photos/seed/0xaa39EECDFee2AE7D37C2C9A08D2D5cd2/640/480",
  },
  {
    id: "0xAD42471Ba87940df7b2BeeC4C3b4879F",
    title: "ipsa praesentium",
    text: "Et perferendis ut ullam quia molestias quia quia totam. Vel possimus culpa numquam quis nihil aut. Officiis architecto repellat officiis culpa autem ut perferendis.",
    start: "1979-04-15T11:36:06.900Z",
    end: "1987-03-15T14:05:57.757Z",
    imageUrl:
      "https://picsum.photos/seed/0xAD42471Ba87940df7b2BeeC4C3b4879F/640/480",
  },
  {
    id: "0xA861C6FAdbd74B4e7D4DdC31DA97d8DE",
    title: "consectetur et",
    text: "Minima cupiditate similique tenetur saepe error ullam beatae libero repudiandae. Eum id quos autem voluptatum velit consequatur quis. Ex voluptatem voluptate nobis. Qui ipsum quas nihil vel rerum. Illo debitis dolore est eius quod voluptatem.",
    start: "1835-10-21T13:05:18.662Z",
    end: "1853-09-18T16:12:39.896Z",
    imageUrl:
      "https://picsum.photos/seed/0xA861C6FAdbd74B4e7D4DdC31DA97d8DE/640/480",
  },
  {
    id: "0x7afAffE45cf4dAA002725f1A490FAfDB",
    title: "distinctio aut est",
    text: "Earum et totam. Sunt et aut quis assumenda soluta numquam unde blanditiis molestias. Dolore eius qui. Natus deleniti non doloribus velit ipsum omnis. Id nihil doloremque.",
    start: "1915-01-15T01:12:39.510Z",
    end: "1922-05-30T09:35:03.258Z",
    imageUrl:
      "https://picsum.photos/seed/0x7afAffE45cf4dAA002725f1A490FAfDB/640/480",
  },
  {
    id: "0xFd589eBF61DA2E57b5a8C3C9a528FD32",
    title: "sed voluptatem qui dolorem voluptatibus",
    text: "Quos est consequuntur saepe. Earum et et. Molestias omnis sint illo culpa ut recusandae dolorem adipisci sunt. Fugit ut earum sed dicta.",
    start: "1981-04-02T18:02:28.967Z",
    end: "1983-03-12T12:14:44.052Z",
    imageUrl:
      "https://picsum.photos/seed/0xFd589eBF61DA2E57b5a8C3C9a528FD32/640/480",
  },
  {
    id: "0x8E0d7d813B6DcdacA65Eab2e0f2e6cd6",
    title: "alias",
    text: "Repellendus molestiae et ea nulla ab odio veritatis adipisci et. Sunt praesentium incidunt temporibus impedit. Ullam commodi similique.",
    start: "1855-01-11T15:14:11.303Z",
    end: "1884-05-02T10:34:58.863Z",
    imageUrl:
      "https://picsum.photos/seed/0x8E0d7d813B6DcdacA65Eab2e0f2e6cd6/640/480",
  },
  {
    id: "0x63086f21EDD6D3FF9B3bE78EBdDda6DC",
    title: "ut",
    text: "Perferendis temporibus praesentium voluptatem quas autem vel laboriosam. Libero id impedit ut quod. Eum officia iure. Velit fuga odio dolorum exercitationem consectetur excepturi.",
    start: "1852-08-23T04:54:31.753Z",
    end: "1857-08-12T08:29:52.246Z",
    imageUrl:
      "https://picsum.photos/seed/0x63086f21EDD6D3FF9B3bE78EBdDda6DC/640/480",
  },
  {
    id: "0xB8a88FCadBBCb51ADEa0F8F5d5ccCC89",
    title: "asperiores sunt omnis eligendi aliquam",
    text: "Quo et illum aperiam. Ut rerum aut illum non error vel dolore nesciunt. Laboriosam iusto quis ex perspiciatis quaerat quod.",
    start: "1854-11-03T12:49:59.253Z",
    end: "1887-09-21T04:13:34.191Z",
    imageUrl:
      "https://picsum.photos/seed/0xB8a88FCadBBCb51ADEa0F8F5d5ccCC89/640/480",
  },
  {
    id: "0xAfece10D049152bfBa0a3afbD25f8Fb9",
    title: "qui officiis",
    text: "Eum qui est cumque occaecati. Voluptas eum fugiat sed ullam id. Consequatur facilis blanditiis voluptatem molestias qui assumenda velit. Repellat possimus aut et.",
    start: "1916-12-21T11:22:31.538Z",
    end: "1933-05-17T09:19:28.934Z",
    imageUrl:
      "https://picsum.photos/seed/0xAfece10D049152bfBa0a3afbD25f8Fb9/640/480",
  },
  {
    id: "0xCAD53cc8d96CFC0842B0BF7062aAA9b9",
    title: "repellat enim sed adipisci cumque mollitia",
    text: "Ipsam exercitationem exercitationem et. Officia neque sed rerum ut fuga architecto esse eos et. Rerum laudantium odio excepturi. Aliquam totam qui qui. Eaque et eum iure et.",
    start: "1925-11-19T07:44:06.275Z",
    end: "1940-02-05T15:02:59.708Z",
    imageUrl:
      "https://picsum.photos/seed/0xCAD53cc8d96CFC0842B0BF7062aAA9b9/640/480",
  },
  {
    id: "0xf1f0ec2CFB7DB3afA4BbCebBba72eDB8",
    title: "in nihil",
    text: "Ipsa et dignissimos qui distinctio hic commodi. Eos esse quibusdam quo totam rerum et et. Dolores id consequatur aperiam quia commodi nihil delectus id. Eveniet quidem nulla corrupti nemo quibusdam. Facilis vel doloribus voluptate architecto maiores similique. Fuga id quae nesciunt.",
    start: "1953-11-06T13:00:25.205Z",
    end: "1960-03-17T21:42:52.104Z",
    imageUrl:
      "https://picsum.photos/seed/0xf1f0ec2CFB7DB3afA4BbCebBba72eDB8/640/480",
  },
  {
    id: "0x4607aa9DCe4EB8b2ae4c1022390AA3f0",
    title: "pariatur voluptas nam et temporibus",
    text: "Repudiandae adipisci cumque est deleniti est. Veritatis dolores dolorem vero laboriosam. Laborum possimus omnis porro. Enim animi cumque modi. Harum ut officia laborum.",
    start: "1846-01-22T05:12:03.233Z",
    end: "1861-04-07T10:07:24.168Z",
    imageUrl:
      "https://picsum.photos/seed/0x4607aa9DCe4EB8b2ae4c1022390AA3f0/640/480",
  },
  {
    id: "0xf6aD6f34CDCD2BFcCDE4b3421b80fB66",
    title: "debitis vero nostrum veritatis",
    text: "Omnis nulla qui esse. Expedita odio ea est. Autem quasi odio quas esse totam. Omnis aut ipsum facere veniam aut.",
    start: "1877-02-27T05:55:03.342Z",
    end: "1887-09-24T20:47:21.591Z",
    imageUrl:
      "https://picsum.photos/seed/0xf6aD6f34CDCD2BFcCDE4b3421b80fB66/640/480",
  },
  {
    id: "0xF598b1232B6fDDa65dB8C6b7597AbdDD",
    title: "consequatur numquam est et occaecati",
    text: "Ab odit consequatur veniam sit totam dolorem voluptatem. Cupiditate rerum qui placeat ex possimus sed. Et aspernatur non totam cupiditate voluptatem soluta fuga odio recusandae. Nobis repellendus et qui sequi saepe laudantium quod sint.",
    start: "1972-12-21T19:10:14.146Z",
    end: "1975-03-03T21:01:33.962Z",
    imageUrl:
      "https://picsum.photos/seed/0xF598b1232B6fDDa65dB8C6b7597AbdDD/640/480",
  },
  {
    id: "0xA59cCEbBBB85eA8a73fC6Ac62ae7Cef6",
    title: "eaque quo",
    text: "Unde modi vel quam rerum cumque laudantium. Debitis et in quibusdam ut illum quis autem ut reprehenderit. Nemo placeat totam vero est vel iste ab odio dignissimos. Culpa numquam consectetur nesciunt doloribus omnis natus reiciendis doloribus autem. Id temporibus ab excepturi consequatur ea ut ad.",
    start: "1968-08-04T17:34:12.755Z",
    end: "1968-12-31T03:54:36.627Z",
    imageUrl:
      "https://picsum.photos/seed/0xA59cCEbBBB85eA8a73fC6Ac62ae7Cef6/640/480",
  },
  {
    id: "0xA38CcecB6949e0FBaDd7cF74D2EA5Fb3",
    title: "consequatur id veniam iure eius",
    text: "Aperiam error consequatur minus nesciunt ab totam. Et ea occaecati tenetur rerum eum vel ad debitis. Officiis eligendi beatae ut. Repellat unde eos dignissimos nulla consequatur sapiente eos omnis et. Error odit occaecati qui et pariatur temporibus rem. Suscipit et maiores recusandae voluptatibus est dolorem quis.",
    start: "1998-04-04T14:40:05.776Z",
    end: "2000-08-25T02:48:09.649Z",
    imageUrl:
      "https://picsum.photos/seed/0xA38CcecB6949e0FBaDd7cF74D2EA5Fb3/640/480",
  },
  {
    id: "0xe2B358cf2adFFAffF85F2E9ECE0c9E8A",
    title: "repudiandae non cum",
    text: "Omnis ab et alias. Velit quo culpa dolore quia. Ea beatae ea praesentium. Suscipit recusandae nam iste sed est incidunt. Quibusdam hic nam dolor beatae eos vel enim dolorum. Aut aperiam et et.",
    start: "1837-03-09T21:38:44.955Z",
    end: "1867-11-24T15:36:39.506Z",
    imageUrl:
      "https://picsum.photos/seed/0xe2B358cf2adFFAffF85F2E9ECE0c9E8A/640/480",
  },
  {
    id: "0x53c1ff3a1D8DeFa3a01b7BdCfBB0D2Ac",
    title: "facere eaque ut",
    text: "Voluptate minus cumque et voluptatem dolorem accusamus. Vel tempora ipsa. Impedit necessitatibus provident dicta voluptas voluptatem et.",
    start: "1859-09-07T12:27:38.852Z",
    end: "1889-04-28T23:30:42.558Z",
    imageUrl:
      "https://picsum.photos/seed/0x53c1ff3a1D8DeFa3a01b7BdCfBB0D2Ac/640/480",
  },
  {
    id: "0xaFd28b6ED4DF539Aeec47ebFEd5d4f53",
    title: "et nesciunt",
    text: "Beatae sed laboriosam. Laboriosam aspernatur consequatur dolorem. Quo cupiditate pariatur recusandae. Autem omnis amet provident ut cum.",
    start: "1983-06-01T00:06:47.631Z",
    end: "1990-12-17T21:40:31.318Z",
    imageUrl:
      "https://picsum.photos/seed/0xaFd28b6ED4DF539Aeec47ebFEd5d4f53/640/480",
  },
  {
    id: "0xc0FFc2B75CCbFbBaDFcb8168Cb5ed9ba",
    title: "et in iure expedita",
    text: "Qui totam sequi et odio dolores. Quia expedita aut autem. Qui alias vel dolorum sit facilis eaque impedit. Rerum officiis aut nam id dicta autem.",
    start: "1886-11-07T04:32:57.397Z",
    end: "1899-12-28T12:37:51.800Z",
    imageUrl:
      "https://picsum.photos/seed/0xc0FFc2B75CCbFbBaDFcb8168Cb5ed9ba/640/480",
  },
  {
    id: "0xFf067D6D4AFa04ecf4Bd19FCbB54Bde0",
    title: "aspernatur ullam velit sint aut",
    text: "Nobis facilis aperiam dolor. Non omnis sit esse delectus doloremque mollitia. Quasi amet quidem est. Itaque consequuntur dolorem eos eos sit. Rerum in corporis omnis sed. Facere nisi fugiat nulla consequatur.",
    start: "1847-10-05T21:57:07.985Z",
    end: "1848-07-07T13:19:22.212Z",
    imageUrl:
      "https://picsum.photos/seed/0xFf067D6D4AFa04ecf4Bd19FCbB54Bde0/640/480",
  },
  {
    id: "0xaD5CBEf39d5CCb8f20A892c4177BBEeF",
    title: "voluptate rerum enim",
    text: "Delectus minus ducimus adipisci excepturi est sit voluptatem ut rerum. Excepturi ea dolore. Similique sequi laboriosam molestias dolorem fugit est. In et ea. Laborum ipsum quaerat dolorem et sit. Sint ex eveniet voluptate expedita et laborum et vero.",
    start: "1968-08-13T01:25:33.399Z",
    end: "1979-03-25T14:33:10.902Z",
    imageUrl:
      "https://picsum.photos/seed/0xaD5CBEf39d5CCb8f20A892c4177BBEeF/640/480",
  },
  {
    id: "0x2d29350b4284cAd91D33CDE7481b9e9B",
    title: "ullam ut distinctio dolores et ad",
    text: "Error quas excepturi accusamus vitae impedit dolores deserunt quis dignissimos. Quam sit nulla a odit architecto. Ut omnis sed quo quidem et. Et rerum vero deleniti distinctio et dolor.",
    start: "1954-04-11T05:31:24.953Z",
    end: "1961-07-10T10:49:00.076Z",
    imageUrl:
      "https://picsum.photos/seed/0x2d29350b4284cAd91D33CDE7481b9e9B/640/480",
  },
  {
    id: "0x7FEeF6eD5c7e5c27299EcD05d521C3b1",
    title: "et voluptates quia",
    text: "Accusamus consequatur cupiditate modi. Qui et aut beatae mollitia. Molestiae officiis culpa voluptatem quibusdam. Iste et qui possimus.",
    start: "1982-04-02T03:28:48.296Z",
    end: "1986-12-02T13:45:06.714Z",
    imageUrl:
      "https://picsum.photos/seed/0x7FEeF6eD5c7e5c27299EcD05d521C3b1/640/480",
  },
  {
    id: "0x4F045FAAf57180a9ceA3d42f0c4F1559",
    title: "aperiam ipsum vel quas cupiditate",
    text: "Sequi vitae doloremque autem non est accusamus. Ullam eveniet recusandae. Asperiores recusandae libero error vero minus harum. Consequatur inventore commodi et sed repudiandae ut quia ut. Non earum dolorem nostrum eveniet excepturi sit sed. Ea repellendus aliquid.",
    start: "1961-08-12T05:36:06.252Z",
    end: "1972-06-30T19:39:53.486Z",
    imageUrl:
      "https://picsum.photos/seed/0x4F045FAAf57180a9ceA3d42f0c4F1559/640/480",
  },
  {
    id: "0x98d9B5992A79Bb2ccEd6D29A958E2CC7",
    title: "non ab doloribus exercitationem aspernatur",
    text: "Cupiditate quod omnis molestiae id neque odit cum velit officia. Omnis occaecati dolorem sint dolor sint et omnis ut dolorem. Est assumenda provident explicabo eveniet quibusdam perspiciatis. Dolorum repellendus impedit architecto doloremque in. Ab voluptatum qui cumque quo. Laborum voluptatem neque sint et reiciendis vitae iusto.",
    start: "1982-07-27T17:39:52.101Z",
    end: "1987-08-10T08:31:03.912Z",
    imageUrl:
      "https://picsum.photos/seed/0x98d9B5992A79Bb2ccEd6D29A958E2CC7/640/480",
  },
  {
    id: "0x3e2b83EA8dc0Cf02EC9F5DFDA7AA107C",
    title: "distinctio",
    text: "Cupiditate numquam nostrum voluptatem. Voluptas repellat commodi est reiciendis rerum et vel doloribus dignissimos. Doloribus voluptas odit quas quam et quia ut quaerat enim. Quam dignissimos velit vitae quia. Dolor est delectus et voluptatem. Architecto qui qui aperiam odit aliquam officiis autem suscipit nemo.",
    start: "1957-07-06T06:52:30.092Z",
    end: "1963-10-14T00:19:59.519Z",
    imageUrl:
      "https://picsum.photos/seed/0x3e2b83EA8dc0Cf02EC9F5DFDA7AA107C/640/480",
  },
  {
    id: "0xdcDeE27A45aD51fCaCbd4d3516Bfed34",
    title: "error dolore",
    text: "Consequatur amet ipsam quisquam dignissimos voluptates consequatur et sunt. Fugiat et alias. Doloribus tempore rerum corrupti quod voluptas eum. Similique ad ratione omnis enim a rem exercitationem.",
    start: "1997-09-06T23:18:10.175Z",
    end: "2001-09-12T11:57:00.910Z",
    imageUrl:
      "https://picsum.photos/seed/0xdcDeE27A45aD51fCaCbd4d3516Bfed34/640/480",
  },
  {
    id: "0x9784F584fedf7E0bFaed5Af1fEcbf5aE",
    title: "cumque repellat aut quibusdam qui",
    text: "Cupiditate eum cupiditate non eum neque laudantium ad unde atque. Quas aut veniam delectus. Voluptas adipisci facilis magnam non qui ut officia. Ducimus aut aspernatur alias reiciendis voluptate.",
    start: "1929-07-29T09:10:47.612Z",
    end: "1930-04-30T05:42:27.656Z",
    imageUrl:
      "https://picsum.photos/seed/0x9784F584fedf7E0bFaed5Af1fEcbf5aE/640/480",
  },
  {
    id: "0x445eAD68a5beA60AfADAF19DDceec394",
    title: "fuga mollitia",
    text: "Natus quaerat culpa quia odit qui nobis dolores in tenetur. Sed est facilis voluptas id est sed dolorem et. Voluptas odio deleniti perferendis provident odio et. Voluptas rem error autem qui voluptas quo perspiciatis. Sed voluptas exercitationem expedita ut neque est est laborum. Repellendus deserunt nihil est maiores.",
    start: "1973-03-15T05:28:16.897Z",
    end: "1975-07-14T01:19:15.479Z",
    imageUrl:
      "https://picsum.photos/seed/0x445eAD68a5beA60AfADAF19DDceec394/640/480",
  },
  {
    id: "0x5DDE17b3a41496Caf3EF446bdfAe80aD",
    title: "rerum ut corporis recusandae",
    text: "Voluptatibus maiores quis ipsam illum eligendi. Omnis quis inventore ut sunt eum voluptate est eveniet et. Quia eos ipsum quis. Et magnam illum. Aut laudantium et sed impedit quos incidunt quod.",
    start: "1824-10-08T13:09:08.466Z",
    end: "1844-11-19T08:49:47.620Z",
    imageUrl:
      "https://picsum.photos/seed/0x5DDE17b3a41496Caf3EF446bdfAe80aD/640/480",
  },
  {
    id: "0xaeCCf514e0B47FE44BdBBbA528E14EFe",
    title: "non tempora consequatur odit",
    text: "Molestiae qui omnis dignissimos odio sit numquam. Repellendus similique eos amet eligendi quo. Saepe nemo qui repudiandae repudiandae repellendus alias amet. Molestiae delectus itaque velit blanditiis. Voluptatibus omnis aut temporibus aspernatur quasi vero quia rem. Esse aut tenetur molestias aut aut est cum odio.",
    start: "1853-09-22T05:36:46.050Z",
    end: "1869-07-12T19:10:55.353Z",
    imageUrl:
      "https://picsum.photos/seed/0xaeCCf514e0B47FE44BdBBbA528E14EFe/640/480",
  },
  {
    id: "0xe7D3af93CFdaFEcBe00343f204733ce1",
    title: "tempore voluptas omnis",
    text: "Ut quas quis unde consequatur nostrum doloremque. Asperiores et accusamus praesentium rerum. Quidem quia ipsum. Dolorem sed ut ipsum ex fuga sunt deserunt. Consequatur dolor ea.",
    start: "2001-01-05T20:39:07.693Z",
    end: "2003-10-08T08:33:56.754Z",
    imageUrl:
      "https://picsum.photos/seed/0xe7D3af93CFdaFEcBe00343f204733ce1/640/480",
  },
  {
    id: "0xa80a0802B4D36001e3B4bBE1465aF956",
    title: "laborum temporibus aperiam quas vero dolor",
    text: "Necessitatibus officia consectetur aut dignissimos quam aut consequatur est. At eum aut vel sit ad. Harum et nemo illum aperiam et esse vitae. Voluptates sed odio nobis molestiae perferendis occaecati necessitatibus id labore. Hic aut ex deserunt ea voluptates occaecati et.",
    start: "1985-10-02T05:06:37.521Z",
    end: "1987-02-02T03:20:01.091Z",
    imageUrl:
      "https://picsum.photos/seed/0xa80a0802B4D36001e3B4bBE1465aF956/640/480",
  },
  {
    id: "0x18Ec29D8CFDF8dfe5FF7c3BBB7A982Ee",
    title: "ipsa officia",
    text: "Aspernatur incidunt tempora modi et nulla eum. Placeat quia voluptatem voluptas nulla tempora corporis accusantium inventore. Dolor unde explicabo velit eos minima quas libero id. Omnis nihil aut officiis reiciendis. Natus dolorum aut fugiat mollitia eos repellat delectus praesentium eum. Eveniet et velit sit nostrum hic fugiat id.",
    start: "1903-09-18T15:23:53.127Z",
    end: "1916-01-26T09:13:51.772Z",
    imageUrl:
      "https://picsum.photos/seed/0x18Ec29D8CFDF8dfe5FF7c3BBB7A982Ee/640/480",
  },
  {
    id: "0x60Fb7825ddEca71e41ED8eDcE68Dd0dA",
    title: "in qui est officiis accusamus",
    text: "Quia omnis doloribus alias quo esse cupiditate harum dolor reiciendis. Iure in temporibus non quis molestias qui quia. Laboriosam et fugit praesentium atque nostrum ad nostrum ab.",
    start: "1915-06-30T11:17:47.259Z",
    end: "1924-05-02T16:40:04.054Z",
    imageUrl:
      "https://picsum.photos/seed/0x60Fb7825ddEca71e41ED8eDcE68Dd0dA/640/480",
  },
  {
    id: "0x7BCe3DCA9dc2e3CEcF2fCDB6Da7F6727",
    title: "sunt sed soluta veritatis",
    text: "Et dolor tempore modi. Et doloribus dignissimos temporibus aspernatur voluptatem officiis distinctio. Rerum unde ea ad cum est sunt voluptatem.",
    start: "1883-07-21T07:59:10.395Z",
    end: "1897-04-25T18:12:17.916Z",
    imageUrl:
      "https://picsum.photos/seed/0x7BCe3DCA9dc2e3CEcF2fCDB6Da7F6727/640/480",
  },
  {
    id: "0xF550C475cC361AeCe57ffCDD27BEbd4f",
    title: "et similique",
    text: "Doloremque id ut quis quod mollitia ut possimus ipsam distinctio. Fuga voluptatum fugit exercitationem ex. Quasi quaerat quas qui sapiente saepe aut tempore. Ullam et culpa optio molestias aliquam harum. Tenetur in qui quam amet est asperiores itaque molestiae. Aperiam quia vitae accusantium praesentium dolorem aut tenetur.",
    start: "2001-03-20T15:29:08.759Z",
    end: "2001-12-11T13:56:06.439Z",
    imageUrl:
      "https://picsum.photos/seed/0xF550C475cC361AeCe57ffCDD27BEbd4f/640/480",
  },
  {
    id: "0xFE48b43bA6BAd60B79E1A47FAEa86F14",
    title: "itaque voluptatem perspiciatis tenetur",
    text: "Quasi aut voluptatum molestias exercitationem quia recusandae fugiat praesentium minima. A ab illo voluptas ut. Aut iste eligendi adipisci. Animi aut maxime. Adipisci repellat unde. Quaerat aliquam quis.",
    start: "1994-01-11T20:44:03.948Z",
    end: "1997-10-19T16:08:02.293Z",
    imageUrl:
      "https://picsum.photos/seed/0xFE48b43bA6BAd60B79E1A47FAEa86F14/640/480",
  },
  {
    id: "0xE9d373734Bf7A45BfA02eC39EaaD0Bf0",
    title: "tempora sit quas aut quia",
    text: "Quam atque natus rerum qui in ad iure perspiciatis. Autem omnis est dicta voluptatem sint tempora culpa ipsa eos. Odio sunt laudantium accusamus qui facilis voluptas quibusdam. Occaecati nam labore sit minus delectus quidem illum non. Neque tenetur fugit. Distinctio tempora nihil.",
    start: "1966-11-13T20:24:19.232Z",
    end: "1976-03-02T14:09:53.596Z",
    imageUrl:
      "https://picsum.photos/seed/0xE9d373734Bf7A45BfA02eC39EaaD0Bf0/640/480",
  },
  {
    id: "0x8Ab7bFa460CaFFbfee1FEf1ef3CC6653",
    title: "impedit unde",
    text: "Temporibus repellendus at dolorum dolores cumque expedita praesentium delectus. Sunt culpa ipsa enim ullam corporis. Perspiciatis facilis excepturi est labore quia error architecto sunt. Commodi ea non natus sed qui dolore libero velit voluptatibus. Provident a odit illum quos amet autem rerum. Ut nulla voluptatem praesentium perferendis quia odit maiores officiis et.",
    start: "1847-05-16T00:42:44.374Z",
    end: "1872-07-08T04:11:49.774Z",
    imageUrl:
      "https://picsum.photos/seed/0x8Ab7bFa460CaFFbfee1FEf1ef3CC6653/640/480",
  },
  {
    id: "0xE87aEfe6fE26159e98f7c2f5FC958cff",
    title: "magnam porro et eligendi",
    text: "Minima nemo dolores asperiores sed. Corporis unde fugiat placeat est. Nemo illum sapiente deserunt. Voluptas aut at nobis voluptatem officiis repudiandae dolorum reiciendis consequatur.",
    start: "1912-03-09T11:58:44.588Z",
    end: "1912-12-18T00:38:46.370Z",
    imageUrl:
      "https://picsum.photos/seed/0xE87aEfe6fE26159e98f7c2f5FC958cff/640/480",
  },
  {
    id: "0x9Eb84D807dbE386EeAa84AAd7Feba0e7",
    title: "ex",
    text: "Fugit ut ut. Et ea blanditiis soluta enim. Aut voluptatem voluptas ducimus blanditiis asperiores voluptatibus.",
    start: "1961-03-24T07:50:28.893Z",
    end: "1968-09-26T02:02:39.179Z",
    imageUrl:
      "https://picsum.photos/seed/0x9Eb84D807dbE386EeAa84AAd7Feba0e7/640/480",
  },
  {
    id: "0xaA027622e36Ed0B4C4077BfD7660ca09",
    title: "odio",
    text: "Eveniet delectus ea similique facere velit nulla. Aut deleniti nemo magni corporis rerum est nobis harum odit. Et ea impedit doloremque repellat dolorem incidunt consequatur officia quia. Laboriosam facere qui ut exercitationem quisquam fugit optio. Voluptatem ut eveniet eligendi est esse accusamus est ut veritatis. Accusamus qui recusandae natus saepe amet.",
    start: "1987-01-15T20:34:44.481Z",
    end: "1989-08-03T18:35:40.801Z",
    imageUrl:
      "https://picsum.photos/seed/0xaA027622e36Ed0B4C4077BfD7660ca09/640/480",
  },
  {
    id: "0x6570c87A8ba46E4fecd8c4E48341c961",
    title: "occaecati quod voluptas consequatur culpa",
    text: "Perspiciatis incidunt et voluptatem odit et est quis voluptatibus. Quaerat harum eligendi enim voluptas eos et et. Impedit sint quisquam repudiandae sed atque quia ipsum. Ab fuga rerum voluptatem. Rerum ut aspernatur non.",
    start: "1922-06-13T06:24:23.916Z",
    end: "1923-09-13T22:15:12.290Z",
    imageUrl:
      "https://picsum.photos/seed/0x6570c87A8ba46E4fecd8c4E48341c961/640/480",
  },
  {
    id: "0xb7c7EF2cE788Cb287CcF1b3A039B3185",
    title: "expedita veniam",
    text: "Blanditiis quas et ut consequatur rerum vel iste. Consequuntur omnis a et. Sunt unde deleniti beatae dolorem aliquid cumque temporibus tempora. Nulla et reiciendis voluptatum possimus minus. Nihil vitae deleniti ipsam.",
    start: "1945-03-07T00:20:36.878Z",
    end: "1948-10-21T12:54:44.842Z",
    imageUrl:
      "https://picsum.photos/seed/0xb7c7EF2cE788Cb287CcF1b3A039B3185/640/480",
  },
  {
    id: "0xfE8dC3E1a105b41d5FA92Ea5618ee51d",
    title: "dolorem doloribus modi",
    text: "Repellendus optio voluptatem possimus alias nihil voluptates. Sed eum est totam voluptatem voluptas aliquam ab. Dolor iusto voluptatem explicabo sed quas sunt error sit. Molestiae distinctio in mollitia explicabo. Est nihil nemo dignissimos.",
    start: "1911-01-24T18:26:22.043Z",
    end: "1920-10-24T18:56:04.265Z",
    imageUrl:
      "https://picsum.photos/seed/0xfE8dC3E1a105b41d5FA92Ea5618ee51d/640/480",
  },
  {
    id: "0xaA89A7aaE9BB3Ca64e112A2fAfDbcb33",
    title: "voluptatem omnis molestiae qui",
    text: "Amet aut ut porro sunt et veniam. Deserunt in quia commodi qui velit dicta eaque quis quaerat. Tempora dolores alias fugit accusamus ducimus. Nemo pariatur qui amet ut. Delectus saepe neque inventore et accusamus. Sit natus esse voluptatem sunt incidunt.",
    start: "1930-03-12T22:22:40.055Z",
    end: "1945-12-02T06:17:24.865Z",
    imageUrl:
      "https://picsum.photos/seed/0xaA89A7aaE9BB3Ca64e112A2fAfDbcb33/640/480",
  },
  {
    id: "0x9eA0eaFcdA34fF0acaE054D07070dFd4",
    title: "et sed aut",
    text: "Ad nihil molestias quis beatae possimus ab corporis tenetur. Unde hic assumenda cupiditate asperiores dolorem et. Repellat iusto similique eos et quam blanditiis qui quia animi. Rerum rerum dolor sed voluptate. Eius reprehenderit et perferendis.",
    start: "1840-05-29T21:43:17.061Z",
    end: "1860-10-28T04:21:40.657Z",
    imageUrl:
      "https://picsum.photos/seed/0x9eA0eaFcdA34fF0acaE054D07070dFd4/640/480",
  },
  {
    id: "0xAdF15D8B753d844fa9FeBC0dE9EaF3CE",
    title: "quaerat quis sed nisi cumque",
    text: "Necessitatibus in nihil tempora harum culpa quidem hic quo. Reprehenderit vitae qui sunt omnis. Nulla voluptatem iusto sed facere. Quidem omnis vero.",
    start: "1859-09-21T14:56:26.200Z",
    end: "1872-04-20T16:42:42.046Z",
    imageUrl:
      "https://picsum.photos/seed/0xAdF15D8B753d844fa9FeBC0dE9EaF3CE/640/480",
  },
  {
    id: "0x3DdfA723e8bCCB152a0D7Afc59ba3e44",
    title: "earum qui",
    text: "Ex itaque eligendi voluptas corrupti libero optio. Odit et quae consequatur fugit fuga. Aut ad odit nisi earum magnam est quia qui quia. Aut natus omnis ducimus. Doloremque sed incidunt reiciendis debitis quae cum.",
    start: "1881-12-15T05:37:12.929Z",
    end: "1904-02-16T21:55:42.583Z",
    imageUrl:
      "https://picsum.photos/seed/0x3DdfA723e8bCCB152a0D7Afc59ba3e44/640/480",
  },
  {
    id: "0xF6dcACC78bD16AC3Ac7f065C3F3517cC",
    title: "vel distinctio molestias id inventore",
    text: "Assumenda nisi vitae voluptas aliquam laudantium pariatur esse facilis. Reiciendis ab ipsum sit. Delectus et molestias suscipit eius qui omnis. Quis velit sit.",
    start: "1858-05-16T16:57:28.362Z",
    end: "1862-06-27T00:14:40.567Z",
    imageUrl:
      "https://picsum.photos/seed/0xF6dcACC78bD16AC3Ac7f065C3F3517cC/640/480",
  },
  {
    id: "0x9Ece0aDCfA9A060c6354Cadcec325fDF",
    title: "rem fuga ut culpa enim tenetur",
    text: "Vel eos ad dolorum. Qui vitae magni facilis. Accusantium voluptas voluptas. Ut sit sed molestiae repellat non. Itaque unde ut aliquam. Amet neque quisquam itaque magni.",
    start: "1903-02-09T11:22:33.206Z",
    end: "1905-04-21T21:46:44.240Z",
    imageUrl:
      "https://picsum.photos/seed/0x9Ece0aDCfA9A060c6354Cadcec325fDF/640/480",
  },
  {
    id: "0xC1053Ca6B8b372DFEa2Bbaf7d222bdD6",
    title: "nobis et non aut",
    text: "Id dolores neque tempora. Labore dolor dolorem assumenda esse vel. Tenetur aut facilis sit id. Aut aut dignissimos. Ea id culpa beatae non laudantium. Ut voluptates vitae.",
    start: "1982-08-14T00:38:39.097Z",
    end: "1983-08-22T17:23:01.233Z",
    imageUrl:
      "https://picsum.photos/seed/0xC1053Ca6B8b372DFEa2Bbaf7d222bdD6/640/480",
  },
  {
    id: "0xBf05A5E3Fb0b727F81c54eBbc0FEfBDf",
    title: "iste aut qui quibusdam fuga reprehenderit",
    text: "In rerum rerum hic occaecati nulla velit rerum explicabo. Qui aut quia asperiores aut. Ex alias corrupti sapiente. Neque omnis est cumque commodi enim.",
    start: "1917-10-13T00:04:24.557Z",
    end: "1919-06-23T06:33:21.592Z",
    imageUrl:
      "https://picsum.photos/seed/0xBf05A5E3Fb0b727F81c54eBbc0FEfBDf/640/480",
  },
  {
    id: "0x4e97a0fFa3EBC2F2e4b1A3eB4aF8fBB1",
    title: "et ipsam necessitatibus placeat quia",
    text: "Excepturi rem voluptas architecto. Eum officia inventore vel sequi. Distinctio ut cupiditate qui voluptas placeat omnis omnis velit et. Dolores quia quo numquam.",
    start: "1870-08-26T10:52:03.208Z",
    end: "1897-10-30T12:20:24.314Z",
    imageUrl:
      "https://picsum.photos/seed/0x4e97a0fFa3EBC2F2e4b1A3eB4aF8fBB1/640/480",
  },
];



const htwData: (SpanEvent | PointEvent)[] = [
  {
    id: "1",
    start: "1897",
    end: "1933",
    weight: 2,
    title: "AEG an der Oberspree",
    text: "Für lange Zeit ist die 1598 urkundlich erstmals erwähnte »Schöne Weyde« eine ländlich geprägte Gegend am nördlichen Ufer der Spree. Das älteste nachweisbare Gehöft, der 1682 gegründete „Quappenkrug“, wird als Bauernhof mit Gastwirtschaft geführt. Im Jahr 1814 erwirbt Oberfinanzrat Reinbeck das Anwesen und lässt das Lokal schlossartig ausbauen. Er benennt es nach seiner Frau Wilhelmine „Wilhelminenhof“. Diesen Namen führt ab 1830 auch der erweiterte Gutsbezirk, in dem Mitte des 19. Jahrhunderts insgesamt 116 Menschen leben. Im Jahr der Reichsgründung 1871 geht aus dem Wilhelminenhof der Ort Oberschöneweide hervor. 1889 werden die Ländereien des alten Guts verkauft und parzelliert.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-01_Kraatz-SBB_IIIC_Kart_N_3857_von_1871_Ausschnitt_hwwt3l.jpg",
  },
  {
    id: "2",
    start: "1933",
    end: "1945",
    weight: 2,
    title: "Kriegsproduktion und Zwangsarbeit",
    text: "Auch im KWO gibt es während der NS-Zeit Anhänger_innen und Gegner_innen des Nationalsozialismus. Es sind vor allem KPD-Mitglieder, die sich auf dem Werksgelände organisieren und zum Widerstand gegen das Regime aufrufen.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638710659/19331945-menschen-produktionshalle-01-1920x_jk1lze.jpg",
  },
  {
    id: "3",
    start: "1945",
    end: "1990",
    weight: 2,
    title: "Kabel für den Sozialismus",
    text: "Nach dem Ende des Zweiten Weltkriegs liegt die Konzernzentrale der AEG, zu der auch das KWO gehört, im sowjetisch besetzten Teil von Berlin.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705333/03-03b_neubau-spreehalle-1961-02_pre5sw.jpg",
  },
  {
    id: "4",
    start: "1990",
    end: undefined,
    weight: 2,
    title: "Vom Kabelwerk zur Denkfabrik",
    text: "Der Wandel des Quartiers zwischen Wilhelminenhofstraße und Spreelauf lässt sich auch an diesem Dreisatz ablesen. Ein bedeutendes Gründerzentrum der Industriemoderne hat sich in einen modernen, lebendigen Hochschulstandort verwandelt: 2009 wird der Campus Wilhelminenhof der Hochschule für Technik und Wirtschaft Berlin eröffnet.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638710851/seit-1990-produktion-hallenblock-ii-01-1920x_zcwj8k.jpg",
  },
  // {
  //   id: "5",
  //   date: "1814",
  //   topic: "Menschen",
  //   title: "Wilhelminenhof",
  //   text: "Im Jahr 1814 erwirbt Oberfinanzrat Reinbeck das Anwesen und lässt das Lokal schlossartig ausbauen. Er benennt es nach seiner Frau Wilhelmine „Wilhelminenhof“.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-02_gruss-aus-wilhelminenhof-1896-postkarte-htw_fz3hiy.jpg",
  // },
  // {
  //   id: "6",
  //   date: "1871",
  //   topic: "Ort",
  //   title: "Oberschöneweide",
  //   text: "Im Jahr der Reichsgründung geht aus dem Wilhelminenhof der Ort Oberschöneweide hervor.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-02_gruss-aus-wilhelminenhof-1896-postkarte-htw_fz3hiy.jpg",
  // },
  // {
  //   id: "7",
  //   date: "1889",
  //   topic: "Ort",
  //   title: "Verkauf des Wilhelminenhofs",
  //   text: "Die Ländereien des alten Guts werden verkauft und parzelliert.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-02_gruss-aus-wilhelminenhof-1896-postkarte-htw_fz3hiy.jpg",
  // },
  // {
  //   id: "8",
  //   date: "1886",
  //   topic: "Produktion",
  //   title: "AEG an der Oberspree",
  //   text: "Seit 1886 produziert die Allgemeine Electricitäts-Gesellschaft (AEG) in der Berliner Innenstadt Güter für die Elektrizitätswirtschaft. Dank des rasanten Wachstums muss AEG-Gründer Emil Rathenau bald nach neuen Produktionsstandorten suchen. Ein Gelände am Spreelauf in Oberschöneweide, weit vor den Toren der Stadt, erweist sich dank der guten Anbindung an Schienen- und Wasserwege als optimale Wahl.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-01_Kraatz-SBB_IIIC_Kart_N_3857_von_1871_Ausschnitt_hwwt3l.jpg",
  // },
  // {
  //   id: "9",
  //   date: "1895",
  //   topic: "Ort",
  //   title: "Industriestandort Oberschöneweide",
  //   text: "1895 beginnt die Bebauung des Geländes zwischen Wilhelminenhofstraße und Spree mit der Errichtung des ersten Drehstromkraftwerks in Deutschland.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705326/01-04b_kwo-kohlenplatz-1904_uuqwzm.jpg",
  // },
  {
    id: "10",
    date: "1897",
    topic: "Produktion",
    title: "Entstehung des Kabelwerk Oberspree (KWO)",
    text: "Im Kabelwerk Oberspree entstehen vor allem Kabel, Drähte und Gummifabrikate für die heimische Elektroindustrie. Angesichts steigender Kupferpreise wird die Produktion auf Blei- und Aluminiumkabel ausgedehnt. Eine wichtige Rolle spielt das Exportgeschäft. So liefert die AEG ihre Erzeugnisse nach England oder Südafrika. Doch auch die Forschung kommt nicht zu kurz. Ingenieure des KWO sind maßgeblich an der Entwicklung moderner Funk- und Fernmeldetechnik beteiligt und forschen nach Möglichkeiten zur Herstellung von synthetischem Kautschuk. In den 1920er Jahren startet im NAG-Gebäude die Bildröhrenproduktion für Telefunken, einer gemeinsamen Unternehmenstochter von AEG und Siemens. Das Fernsehzeitalter beginnt in Oberschöneweide.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705327/01-04c_kwo-trommellager-vor-halle-1-1912_bdfljk.jpg",
  },
  {
    id: "11",
    date: "1905",
    topic: "Ort",
    title: "Gebäude der Nationalen Automobil-Gesellschaft",
    text: "1905 entsteht das Gebäude der Nationalen Automobil-Gesellschaft* (NAG). Die Fabriken, ausgestattet mit elektrischer Antriebs- und Beleuchtungstechnik, gehören zu den modernsten Industrieanlagen jener Zeit. Ihre Fassaden aus gelbem Ziegelstein, dem sogenannten „Schöneweider Klinker“, prägen das Erscheinungsbild des gesamten Quartiers.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705326/01-04b_kwo-kohlenplatz-1904_uuqwzm.jpg",
  },
  {
    id: "12",
    date: "1919",
    topic: "Ort",
    title: "Kleinstadt Oberschöneweide",
    text: "Mit der Produktivität wächst auch die Bevölkerungszahl: Dank des Zuzugs von Arbeitskräften und deren Familien entwickelt sich Oberschöneweide rasch zu einer Kleinstadt, die im Jahr 1919 rund 25.000 Einwohnerinnen und Einwohner zählt.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705327/01-04c_kwo-trommellager-vor-halle-1-1912_bdfljk.jpg",
  },
  {
    id: "13",
    date: "1920",
    topic: "Ort",
    title: "Anschluss an Berlin",
    text: "Oberschöneweide wird zu einem Ortsteil von Groß-Berlin.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705327/01-04c_kwo-trommellager-vor-halle-1-1912_bdfljk.jpg",
  },
  {
    id: "14",
    date: "1923",
    topic: "Menschen",
    title: "Ein Unternehmen mit Verantwortung",
    text: "Für die Werkspeisung der Arbeiter hatte die AEG schon im Ersten Weltkrieg eigene landwirtschaftliche Betriebe gegründet. Auch in den Anfangsjahren der Weimarer Republik sorgt die Firma für ihre Belegschaft. Denn die Not ist groß. Viele Männer sind im Krieg gefallen oder als Invaliden zurückgekehrt. Nicht selten nehmen nun Frauen, die ihre Familien schon während der Kriegsjahre ernähren mussten, deren Arbeitsplatz im KWO ein. Doch der internationale Boykott deutscher Erzeugnisse nach dem Krieg bringt auch die AEG in wirtschaftliche Bedrängnis. Während der Inflation 1923 wird der Lohn teilweise in Naturalien ausgezahlt.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705327/01-08_sortieren-von-pressteilen-1913_zeszux.jpg",
  },
  {
    id: "15",
    date: "1892",
    topic: "Menschen",
    title: "Emil und Mathilde Rathenau",
    text: "Der Ingenieur erkennt als einer der ersten deutschen Unternehmer die wirtschaftlichen Chancen der Elektrizität. 1892 gründet das Ehepaar die wohltätige „Mathilde-Rathenau-Stiftung“ zur Unterstützung von AEG-Arbeiterinnen sowie der Angehörigen von verstorbenen Angestellten der AEG und der Berliner Elektrizitäts-Werke. Die Stiftung unterhält einen Pensions- und Unterstützungsfonds, übernimmt die Kosten für medizinische Behandlungen im Krankheitsfall und finanziert Ferienaufenthalte von Kindern. Bis heute erinnert die Mathildenstraße in Oberschöneweide an Mathilde Rathenau.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705334/01-12_emil_mathilde-rathenau_iv07dr.jpg",
  },
  {
    id: "16",
    date: "1907",
    topic: "Menschen",
    title: "Peter Behrens",
    text: "Peter Behrens gehört mit seiner Idee des einheitlichen Erscheinungsbildes eines Unternehmens zu den Pionieren der Moderne. Von 1907 bis 1914 ist er als gestalterischer Beirat der AEG tätig und entwickelt in dieser Position das weltweit erste Corporate Design für eine Firma. Dazu zählen neben dem Firmenlogo auch das Design der Produkte und die Architektur der Fabrikgebäude.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705328/01-13-Peter_Behrens_um_1913_b48kgi.jpg",
  },
  {
    id: "17",
    date: "1916",
    topic: "Menschen",
    title: "Jan Czochralski",
    text: "1916 taucht der polnische Chemiker Jan Czochralski im Metall-Labor des KWO seine Schreibfeder aus Versehen in einen Tiegel mit flüssigem Zinn. Beim Herausziehen bildet sich ein Metallfaden, ein sogenannter Einkristall. Czochralskis zufällige Entdeckung wird zur Basis eines modernen industriellen Tiegelziehverfahrens zur Herstellung von Einkristallen. Das sogenannte Czochralski-Verfahren dient bis heute zur Fertigung von sogenannten Silizium-Ingots (zylinderförmige Barren), die für Mikrochips, in der Mikrosystemtechnik oder für Solarmodule benötigt werden.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705332/01-14_Czochralski-portrait_lrrjpo.jpg",
  },
  {
    id: "18",
    date: "1939",
    topic: "Produktion",
    title: "AEG als Rüstungslieferant",
    text: "Mit Beginn des Zweiten Weltkriegs im September 1939 wird die Fertigung der AEG auf Kriegsproduktion umgestellt. Das Unternehmen gehört zusammen mit Krupp zu den wichtigsten Rüstungslieferanten Deutschlands.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639059856/19331945-produktion-pressenarbeiter-ca-1934-01-1920x_bp8gvr.jpg",
  },
  {
    id: "19",
    date: "1933",
    topic: "Produktion",
    title: "Die AEG als Rüstungsbetrieb",
    text: "Nach dem Machtantritt des NS-Regimes im Januar 1933 produziert das Kabelwerk Oberspree (KWO) zunächst Verkabelungen für neue Autobahnstrecken, aber auch die Lautsprecheranlage für die Olympischen Spiele 1936 in Berlin. Doch nach Kriegsbeginn wird das KWO zum Rüstungsbetrieb und fertigt nun vor allem Fernmelde- und Starkstromkabel für die Wehrmacht und ihre Zulieferer. Das Chemieunternehmen IG Farben beauftragt das KWO mit Herstellung und Lieferung von Starkstromkabeln für den Aufbau einer Fabrik in Auschwitz. Mit Kriegsverlauf nehmen die Luftangriffe auf den Standort in Oberschöneweide zu. Trotzdem läuft die Produktion weiter. Unter der Maschinenhalle des benachbarten Kraftwerks Oberspree befindet sich ein Luftschutzbunker, in den die Belegschaft während der Angriffe flüchtet, um anschließend direkt wieder an ihre Arbeitsplätze in den Werkhallen zurückzukehren.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705330/02-04_volksempfaenger-falkensee_phrzsp.jpg",
  },
  {
    id: "20",
    date: "1933",
    topic: "Menschen",
    title: "Alles für den „Endsieg“",
    text: "Direkt nach Kriegsbeginn werden 700 KWO-Mitarbeiter zur Wehrmacht eingezogen. Um die Produktion aufrechtzuerhalten, arbeiten in den Fabriken nun vor allem Frauen. Im weiteren Verlauf des Krieges werden zudem Kriegsgefangene sowie Deportierte aus den besetzten Gebieten in ganz Europa zur Zwangsarbeit verpflichtet. Ihrem Schicksal widmet sich eine Ausstellung im nahegelegenen Dokumentationszentrum NS-Zwangsarbeit in Schöneweide. Es befindet sich auf dem Gelände des einzigen noch weitgehend erhaltenen ehemaligen NS-Zwangsarbeiterlagers, das während des Zweiten Weltkriegs zu den mehr als 3.000 über das Stadtgebiet verteilten Sammelunterkünften für Zwangsarbeiter gehörte. Seit 2006 informiert dort die Stiftung Topographie des Terrors an historischem Ort über das System Zwangsarbeit.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705327/01-08_sortieren-von-pressteilen-1913_zeszux.jpg",
  },
  {
    id: "21",
    date: "1945",
    topic: "Ort",
    title: "Ein Land in Trümmern",
    text: "Gegen Ende des Zweiten Weltkrieges wird auch Oberschöneweide zum Ziel alliierter Bombenangriffe. Während die Schäden in den Wohnvierteln im Vergleich zur Berliner Innenstadt überschaubar bleiben, gerät das Gelände der KWO unter starken Beschuss. Bombentreffer reißen große Löcher in die Fassaden, und die nach Plänen von Peter Behrens im Jahr 1916 errichtete Spreehalle am Ufer wird völlig zerstört.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705330/02-02d_gebaeude-A4-nach-januar-1944-04_qcjwi3.jpg",
  },
  {
    id: "22",
    date: "1948",
    topic: "Produktion",
    title: "SAG",
    text: "Das KWO wird in eine Sowjetische Aktiengesellschaft (SAG) umgewandelt.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705333/02-02b_gebaeude-A4-nach-januar-1944-02_pbgpfp.jpg",
  },
  // {
  //   id: "23",
  //   start: "1946",
  //   end: "1954",
  //   title: "SAG-VEB-Kombinat",
  //   text: "1946 werden von der Sowjetischen Militäradministration sogenannte Sowjetische Aktiengesellschaften (SAG) gegründet. Diese unter Kontrolle der UdSSR stehenden Unternehmen dienen dem Reparationsausgleich für erlittene Kriegsschäden. 1954 enden die Reparationszahlungen. Die Unternehmen werden verstaatlicht und in Volkseigene Betriebe (VEB) verwandelt. Damit überführt die 1949 gegründete DDR die Produktionsmittel aus privater Hand in den Besitz des Volkes. Über den Zusammenschluss von Volkseigenen Betrieben mit ähnlichem Produktionsprofil entstehen Kombinate. Dadurch soll der Wettbewerb egalisiert und das Potenzial für Forschung und Entwicklung genutzt werden.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705333/02-02b_gebaeude-A4-nach-januar-1944-02_pbgpfp.jpg",
  // },
  // {
  //   id: "24",
  //   start: "1958",
  //   end: "1961",
  //   title: "VEB KWO",
  //   text: "Auch wenn von Spreehalle und Hallenblock II nur noch die Umfassungsmauern stehen, können die übrigen, weitgehend erhaltenen Werkshallen rasch wieder genutzt werden. 1958 bis 1961 wird die neue Spreehalle West* im Stil der sachlich-funktionalen Industriemoderne errichtet.",
  //   image:
  //     "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1638705333/02-02b_gebaeude-A4-nach-januar-1944-02_pbgpfp.jpg",
  // },
  {
    id: "25",
    date: "1958",
    topic: "Produktion",
    title: "Starkstromkabel und Wäscheleine",
    text: "Die Nachkriegsproduktion im KWO konzentriert sich zunächst auf Güter für den täglichen Bedarf der notleidenden Bevölkerung: Löffel, Töpfe, Bratpfannen, Nägel und Feuerzeuge. Gleichzeitig gilt es, das stark zerstörte Kabelnetz Berlins wiederherzustellen. Schon 1958 kommen 85 Prozent aller in der DDR hergestellten Starkstromkabel aus dem KWO. Aber auch Gebrauchsgüter für den Massenbedarf, darunter Hula-Hoop-Reifen, Wäscheleinen und Gartenschläuche, werden in Oberschöneweide produziert.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639065195/19451990-produktion-arbeiterinnen-ringkerne-01-1920x_znt4cl.jpg",
  },
  {
    id: "26",
    date: "1967",
    topic: "Menschen",
    title: "Soziale Verantwortung",
    text: "1967 wird in der DDR die Fünf-Tage-Woche eingeführt. Zum Ausgleich schafft die Regierung mehrere christliche Feiertage ab und lastet die Maschinen durch Schichtdienst stärker aus. Zur Steigerung der Produktivität werden die Belegschaften der Betriebe mit zahlreichen Anreizen und Angeboten motiviert. So unterhält das KWO betriebseigene Kindergärten und Ferienlager, unterstützt Sportvereine, darunter auch den 1. FC Union Berlin, und betreibt ein Klubhaus.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639065195/19451990-produktion-arbeiterinnen-ringkerne-01-1920x_znt4cl.jpg",
  },
  {
    id: "27",
    date: "2009",
    topic: "Ort",
    title: "Eröffnung des Campus Wilhelminenhof der HTW",
    text: "Nach der Wiedervereinigung 1990 bricht die Produktion im KWO ein. 1992 übernimmt die britische Firma BICC Cables Ltd. das Werk. Doch 1997 wird der Betrieb endgültig eingestellt. Auf dem Areal eröffnet die HTW Berlin 2009 den Campus Wilhelminenhof. Mit den Disziplinen Maschinenbau, Elektrotechnik, Kommunikationstechnik und Design schreibt nun die Hochschule in Lehre und Forschung die große Geschichte des Ortes fort.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639065564/seit-1990-produktion-hallenblock-ii-01-1280x_xjztsy.jpg",
  },
  {
    id: "28",
    date: "2005",
    topic: "Ort",
    title:
      "Beginn der Bauarbeiten am Campus Wilhelminenhof",
    text: "Nachdem alle Versuche fehlschlagen, auf dem KWO-Gelände neues Gewerbe anzusiedeln, fällt 2004 die Entscheidung, das Areal in einen Hochschulcampus umzuwandeln. 2005 beginnen die Bauarbeiten. Aufgrund der starken Umweltbelastungen in Boden und Mauerwerk wird die 1928 nach dem Entwurf von Ernst Ziesel errichtete Fernmeldekabelfabrik, einer der bedeutendsten Industriebauten der Moderne, abgerissen - angesichts des anerkannten Denkmalwerts eine höchst umstrittene Entscheidung. An den „Ziesel-Bau“ erinnern heute zwei Neubauten. Sämtliche Altbauten des Campus Wilhelminenhof stehen unter Denkmalschutz und tragen noch die Spuren ihrer einstigen Nutzung; die Straßen auf dem Gelände sind nach den Architekten der AEG-Fabrikhallen benannt.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639065491/seit-1990-ort-tor-4-01-1920x_l2apwg.jpg",
  },
  {
    id: "29",
    date: "1998",
    topic: "Menschen",
    title: "Wende und Wandel",
    text: "Es gibt nur wenige Orte, die den Übergang vom Industriezeitalter zur Wissensgesellschaft besser verkörpern als Schöneweide. Doch dieser Wandel vollzog sich anfangs nicht ohne Verluste. Mit der Schließung der Fabriken hatten viele Menschen ihre Arbeit verloren und den Stadtteil verlassen. Leerstand und Verfall prägten das Viertel. Doch seit 1998 steigt die Einwohnerzahl wieder. In den renovierten Straßen mit ihren Läden und Cafés herrscht neues Leben. Wo früher die Maschinen und Fließbänder rotierten, wird heute gelernt und geforscht. Die HTW Berlin ist ein Teil dieser Erfolgsgeschichte.",
    image:
      "https://res.cloudinary.com/dvdtcs8mf/image/upload/v1639065491/seit-1990-ort-tor-4-01-1920x_l2apwg.jpg",
  },
];

export default htwData;

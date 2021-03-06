// ref : http://www.vizwiz.com/2013/01/alberto-cairo-three-steps-to-become.html
var data2008 = [
    { consumption: 36685788, region: "宜蘭縣", population:	421328, per: 238 },
    { consumption: 26601593, region: "花蓮縣", population:	283503, per: 256 },
    { consumption: 3490616, region: "金門縣", population: 78483, per: 122 },
    { consumption: 35058683, region: "南投縣", population:	420931.5, per: 228 },
    { consumption: 33441013, region: "屏東縣", population:	393898.5, per: 232 },
    { consumption: 35563738, region: "苗栗縣", population:	421768.5, per: 230 },
    { consumption: 182354357, region: "桃園市", population: 1851982, per: 269 },
    { consumption: 262811573, region: "高雄市", population: 2629503, per: 270 },
    { consumption: 41126213, region: "基隆市", population:	387165.5, per: 290 },
    { consumption: 544453, region: "連江縣", population: 9685.5, per: 154 },
    { consumption: 56997367, region: "雲林縣", population:	677470, per: 230 },
    { consumption: 397632415, region: "新北市", population: 3710122, per: 293 },
    { consumption: 44135789, region: "新竹市", population:	396251.5, per: 304 },
    { consumption: 31555415, region: "新竹縣", population:	391110.5, per: 220 },
    { consumption: 27317396, region: "嘉義市", population:	272398, per: 274 },
    { consumption: 39014690, region: "嘉義縣", population:	489415, per: 218 },
    { consumption: 86689301, region: "彰化縣", population:	1212599, per: 195 },
    { consumption: 242222322, region: "臺中市", population: 2406502.5, per: 281 },
    { consumption: 328976296, region: "臺北市", population: 2615855.5, per: 344 },
    { consumption: 15263899, region: "臺東縣", population:	181877, per: 229 },
    { consumption: 182182140, region: "臺南市", population: 1847732, per: 270 },
    { consumption: 7091055, region: "澎湖縣", population:	86410.5, per: 224 }
]

var data2009 = [
    { consumption: 37019663, region: "宜蘭縣", population: 423697.5, per: 239 },
    { consumption: 26456977, region: "花蓮縣", population: 283013.5, per: 256 },
    { consumption: 3606434, region: "金門縣", population: 84269.5, per: 117 },
    { consumption: 35219513, region: "南投縣", population: 418052.5, per: 231 },
    { consumption: 33607009, region: "屏東縣", population: 398165.5, per: 231 },
    { consumption: 35987503, region: "苗栗縣", population: 422937, per: 233 },
    { consumption: 180817539, region: "桃園市", population: 1868101, per: 265 },
    { consumption: 257718801, region: "高雄市", population: 2634262, per: 265 },
    { consumption: 40237471, region: "基隆市", population: 386067.5, per: 286 },
    { consumption: 591529, region: "連江縣", population: 9711, per: 167 },
    { consumption: 57499535, region: "雲林縣", population: 676840, per: 233 },
    { consumption: 395393369, region: "新北市", population: 3748444, per: 289 },
    { consumption: 44512662, region: "新竹市", population: 403707.5, per: 302 },
    { consumption: 32169996, region: "新竹縣", population: 400759.5, per: 220 },
    { consumption: 27301633, region: "嘉義市", population: 272940, per: 274 },
    { consumption: 39358706, region: "嘉義縣", population: 487711.5, per: 221 },
    { consumption: 87190713, region: "彰化縣", population: 1211814.5, per: 197 },
    { consumption: 237705547, region: "臺中市", population: 2422438.5, per: 275 },
    { consumption: 328552575, region: "臺北市", population: 2605233.5, per: 346 },
    { consumption: 15671833, region: "臺東縣", population: 182002.5, per: 236 },
    { consumption: 177412295, region: "臺南市", population: 1850940, per: 263 },
    { consumption: 7218044, region: "澎湖縣", population: 88221, per: 224 },
]

var data2010 = [
    { consumption: 38177956, region: "宜蘭縣", population: 426145, per: 245 },
    { consumption: 26712892, region: "花蓮縣", population: 282440, per: 259 },
    { consumption: 3773665, region: "金門縣", population: 90309, per: 114 },
    { consumption: 35377641, region: "南投縣", population: 414872, per: 234 },
    { consumption: 34128089, region: "屏東縣", population: 394661, per: 237 },
    { consumption: 36309889, region: "苗栗縣", population: 425143, per: 234 },
    { consumption: 180888808, region: "桃園市", population: 1884527, per: 263 },
    { consumption: 258436954, region: "高雄市", population: 2638376, per: 266 },
    { consumption: 40121148, region: "基隆市", population: 383575, per: 287 },
    { consumption: 603286, region: "連江縣", population: 9791, per: 169 },
    { consumption: 58186317, region: "雲林縣", population: 674438, per: 236 },
    { consumption: 401007667, region: "新北市", population: 3781163, per: 291 },
    { consumption: 45220279, region: "新竹市", population: 408666, per: 303 },
    { consumption: 33208576, region: "新竹縣", population: 407173, per: 223 },
    { consumption: 27723871, region: "嘉義市", population: 272290, per: 279 },
    { consumption: 39185626, region: "嘉義縣", population: 485507, per: 221 },
    { consumption: 88169821, region: "彰化縣", population: 1209443, per: 200 },
    { consumption: 237472843, region: "臺中市", population: 2435652, per: 272 },
    { consumption: 327568253, region: "臺北市", population: 2604050, per: 345 },
    { consumption: 15813210, region: "臺東縣", population: 181807, per: 238 },
    { consumption: 177141238, region: "臺南市", population: 1852332, per: 263 },
    { consumption: 7371555, region: "澎湖縣", population: 89933, per: 225 },
]

//少三個
var data2011 = [
    { consumption: 38503863, region: "宜蘭縣", population: 427481, per: 247 },
    { consumption: 26940917, region: "花蓮縣", population: 281874, per: 262 },
    { consumption: 4008354, region: "金門縣", population: 95069, per: 116 },
    { consumption: 35478438, region: "南投縣", population: 411009, per: 236 },
    { consumption: 33920744, region: "屏東縣", population: 391442, per: 237 },
    { consumption: 37557187, region: "苗栗縣", population: 429831, per: 239 },
    { consumption: 181107074, region: "桃園市", population: 1902497, per: 261 },
    { consumption: 256504055, region: "高雄市", population: 2642651, per: 266 },
    { consumption: 39641069, region: "基隆市", population: 379452, per: 286 },
    { consumption: 648536, region: "連江縣", population: 9877, per: 180 },
    { consumption: 57572482, region: "雲林縣", population: 670511, per: 235 },
    { consumption: 403607367, region: "新北市", population: 3804157, per: 291 },
    { consumption: 45788329, region: "新竹市", population: 412884, per: 304 },
    { consumption: 34619638, region: "新竹縣", population: 412580, per: 230 },
    { consumption: 27376782, region: "嘉義市", population: 271192, per: 277 },
    { consumption: 38581737, region: "嘉義縣", population: 481756, per: 219 },
    { consumption: 87293645, region: "彰化縣", population: 1205742, per: 198 },
    { consumption: 238742648, region: "臺中市", population: 2458037, per: 266 },
    { consumption: 325748244, region: "臺北市", population: 2626712, per: 340 },
    { consumption: 15759997, region: "臺東縣", population: 180761, per: 239 },
    { consumption: 175072691, region: "臺南市", population: 1854034, per: 259 },
    { consumption: 7331085, region: "澎湖縣", population: 90412, per: 222 },
]

var data2012 = [
    { consumption: 38590535, region: "宜蘭縣", population: 428405, per: 246 },
    { consumption: 26482644, region: "花蓮縣", population: 281623, per: 257 },
    { consumption: 4226050, region: "金門縣", population: 102516, per: 113 },
    { consumption: 35309524, region: "南投縣", population: 407051, per: 237 },
    { consumption: 35147879, region: "屏東縣", population: 391800, per: 245 },
    { consumption: 37094058, region: "苗栗縣", population: 434694, per: 233 },
    { consumption: 179617788, region: "桃園市", population: 1919606, per: 256 },
    { consumption: 259381471, region: "高雄市", population: 2647676, per: 268 },
    { consumption: 39528450, region: "基隆市", population: 376021, per: 287 },
    { consumption: 661064, region: "連江縣", population: 10518, per: 172 },
    { consumption: 57730067, region: "雲林縣", population: 668161, per: 236 },
    { consumption: 408007424, region: "新北市", population: 3827286, per: 291 },
    { consumption: 45965605, region: "新竹市", population: 417851, per: 301 },
    { consumption: 36468260, region: "新竹縣", population: 420310, per: 237 },
    { consumption: 27511981, region: "嘉義市", population: 270691, per: 278 },
    { consumption: 38491244, region: "嘉義縣", population: 478674, per: 220 },
    { consumption: 86728727, region: "彰化縣", population: 1204060, per: 197 },
    { consumption: 242983015, region: "臺中市", population: 2486701, per: 267 },
    { consumption: 325198191, region: "臺北市", population: 2654559, per: 335 },
    { consumption: 15784845, region: "臺東縣", population: 179747, per: 240 },
    { consumption: 169604861, region: "臺南市", population: 1858496, per: 249 },
    { consumption: 7389197, region: "澎湖縣", population: 91344, per: 221 },
]

var data2013 = [
    { consumption: 39351976, region: "宜蘭縣", population: 429844, per: 251 },
    { consumption: 26999919, region: "花蓮縣", population: 281476, per: 263 },
    { consumption: 4454128, region: "金門縣", population: 110466, per: 110 },
    { consumption: 35703409, region: "南投縣", population: 404085, per: 242 },
    { consumption: 35831659, region: "屏東縣", population: 396319, per: 248 },
    { consumption: 36892271, region: "苗栗縣", population: 439840, per: 230 },
    { consumption: 183928631, region: "桃園市", population: 1936965, per: 260 },
    { consumption: 261115595, region: "高雄市", population: 2652724, per: 270 },
    { consumption: 39045875, region: "基隆市", population: 373576, per: 286 },
    { consumption: 694778, region: "連江縣", population: 11315, per: 168 },
    { consumption: 58467556, region: "雲林縣", population: 666662, per: 240 },
    { consumption: 410703453, region: "新北市", population: 3847661, per: 292 },
    { consumption: 46748569, region: "新竹市", population: 422168, per: 303 },
    { consumption: 37925577, region: "新竹縣", population: 428658, per: 242 },
    { consumption: 27255910, region: "嘉義市", population: 270470, per: 276 },
    { consumption: 39290036, region: "嘉義縣", population: 475762, per: 226 },
    { consumption: 88091992, region: "彰化縣", population: 1203824, per: 200 },
    { consumption: 247056871, region: "臺中市", population: 2513025, per: 269 },
    { consumption: 325023045, region: "臺北市", population: 2672953, per: 333 },
    { consumption: 16040207, region: "臺東縣", population: 178858, per: 246 },
    { consumption: 171901125, region: "臺南市", population: 1862293, per: 253 },
    { consumption: 7467207, region: "澎湖縣", population: 92888, per: 220 },
]

var data2014 = [
    { consumption: 39987501, region: "宜蘭縣", population: 431271, per: 254 },
    { consumption: 28033998, region: "花蓮縣", population: 281240, per: 273 },
    { consumption: 4826427, region: "金門縣", population: 117376, per: 113 },
    { consumption: 36533602, region: "南投縣", population: 402528, per: 249 },
    { consumption: 36507759, region: "屏東縣", population: 402014, per: 249 },
    { consumption: 37969001, region: "苗栗縣", population: 445990, per: 233 },
    { consumption: 189290596, region: "桃園市", population: 1951533, per: 266 },
    { consumption: 264805556, region: "高雄市", population: 2655691, per: 273 },
    { consumption: 39593162, region: "基隆市", population: 371595, per: 292 },
    { consumption: 713866, region: "連江縣", population: 11762, per: 166 },
    { consumption: 59024369, region: "雲林縣", population: 664685, per: 243 },
    { consumption: 418016885, region: "新北市", population: 3862949, per: 296 },
    { consumption: 47526880, region: "新竹市", population: 425628, per: 306 },
    { consumption: 39481772, region: "新竹縣", population: 437681, per: 247 },
    { consumption: 27549531, region: "嘉義市", population: 270405, per: 279 },
    { consumption: 40224131, region: "嘉義縣", population: 472475, per: 233 },
    { consumption: 90045532, region: "彰化縣", population: 1203136, per: 205 },
    { consumption: 253403867, region: "臺中市", population: 2541593, per: 273 },
    { consumption: 327020637, region: "臺北市", population: 2687780, per: 333 },
    { consumption: 16648480, region: "臺東縣", population: 177790, per: 257 },
    { consumption: 174298049, region: "臺南市", population: 1864431, per: 256 },
    { consumption: 7581201, region: "澎湖縣", population: 94295, per: 220 },
]

var data2015 = [
    { consumption: 41329516, region: "宜蘭縣", population: 431815, per: 262 },
    { consumption: 28418183, region: "花蓮縣", population: 281212, per: 277 },
    { consumption: 5238528, region: "金門縣", population: 123113, per: 117 },
    { consumption: 37467286, region: "南投縣", population: 400567, per: 256 },
    { consumption: 37493401, region: "屏東縣", population: 405145, per: 254 },
    { consumption: 38878777, region: "苗栗縣", population: 451001, per: 236 },
    { consumption: 185805000, region: "桃園市", population: 1983411, per: 257 },
    { consumption: 258891831, region: "高雄市", population: 2658268, per: 267 },
    { consumption: 39849030, region: "基隆市", population: 370244, per: 295 },
    { consumption: 695693, region: "連江縣", population: 12101, per: 158 },
    { consumption: 59937971, region: "雲林縣", population: 661260, per: 248 },
    { consumption: 419262076, region: "新北市", population: 3873128, per: 297 },
    { consumption: 47454881, region: "新竹市", population: 428418, per: 303 },
    { consumption: 39984563, region: "新竹縣", population: 447156, per: 245 },
    { consumption: 27722884, region: "嘉義市", population: 270207, per: 281 },
    { consumption: 40801044, region: "嘉義縣", population: 469122, per: 238 },
    { consumption: 91806708, region: "彰化縣", population: 1203239, per: 209 },
    { consumption: 257653522, region: "臺中市", population: 2584283, per: 273 },
    { consumption: 324974084, region: "臺北市", population: 2697137, per: 330 },
    { consumption: 17187821, region: "臺東縣", population: 177196, per: 266 },
    { consumption: 174220687, region: "臺南市", population: 1866276, per: 256 },
    { consumption: 7554640, region: "澎湖縣", population: 95225, per: 217 },
]

var data2016 = [

    { consumption: 42097702, region: "宜蘭縣", population: 433279, per: 265 },
    { consumption: 28457550, region: "花蓮縣", population: 282387, per: 275 },
    { consumption: 5285316, region: "金門縣", population: 126626, per: 114 },
    { consumption: 37250542, region: "南投縣", population: 400145, per: 254 },
    { consumption: 38547449, region: "屏東縣", population: 409318, per: 257 },
    { consumption: 40018757, region: "苗栗縣", population: 452275, per: 242 },
    { consumption: 194153086, region: "桃園市", population: 2028825, per: 261 },
    { consumption: 259686226, region: "高雄市", population: 2661270, per: 267 },
    { consumption: 40049461, region: "基隆市", population: 369811, per: 296 },
    { consumption: 740067, region: "連江縣", population: 12146, per: 166 },
    { consumption: 60917980, region: "雲林縣", population: 656762, per: 253 },
    { consumption: 424657637, region: "新北市", population: 3881990, per: 299 },
    { consumption: 48264247, region: "新竹市", population: 431094, per: 306 },
    { consumption: 41614295, region: "新竹縣", population: 456787, per: 249 },
    { consumption: 28141504, region: "嘉義市", population: 269750, per: 285 },
    { consumption: 41883823, region: "嘉義縣", population: 465843, per: 246 },
    { consumption: 93961031, region: "彰化縣", population: 1204381, per: 213 },
    { consumption: 262928285, region: "臺中市", population: 2628828, per: 273 },
    { consumption: 325896575, region: "臺北市", population: 2693804, per: 331 },
    { consumption: 17868441, region: "臺東縣", population: 177285, per: 275 },
    { consumption: 176552710, region: "臺南市", population: 1867718, per: 258 },
    { consumption: 7909424, region: "澎湖縣", population: 95980, per: 225 },
]

var linedata = [
    { year: 2008, consumption: 182354357 },
    { year: 2009, consumption: 180817539 },
    { year: 2010, consumption: 180888808 },
    { year: 2011, consumption: 181107074 },
    { year: 2012, consumption: 179617788 },
    { year: 2013, consumption: 183928631 },
    { year: 2014, consumption: 189290596 },
    { year: 2015, consumption: 185805000 },
    { year: 2016, consumption: 194153086 },
]

var popdata = [
    { year: 2008, population: 1851982 },
    { year: 2009, population: 1868101 },
    { year: 2010, population: 1884527 },
    { year: 2011, population: 1902497 },
    { year: 2012, population: 1919606 },
    { year: 2013, population: 1936965 },
    { year: 2014, population: 1951533 },
    { year: 2015, population: 1983411 },
    { year: 2016, population: 2028825 },
]
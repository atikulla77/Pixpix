import { React } from "react";
import "./App.css";
import Home from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./page/Category";
import { cetagoryContext } from "./context/cetagoryContext";
import { trandingContext } from "./context/trandingContext";

import { PiShirtFoldedLight } from "react-icons/pi";
import { LiaTshirtSolid } from "react-icons/lia";
import { FaShoppingBasket } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { LuCable } from "react-icons/lu";
import { TbDevices } from "react-icons/tb";
import { GiLipstick } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import { TbDeviceWatchExclamation } from "react-icons/tb";
import { TbFreezeColumn } from "react-icons/tb";
import { GiBabyBottle } from "react-icons/gi";
import Product from "./page/Product";

import iphone15 from "./assist/productsBrand/iphone15.png";
import yamahaR15 from "./assist/productsBrand/r15.png";
import productImg from "./assist/productsBrand/laptop.png";
import royalEnfield from "./assist/productsBrand/RoyalEnfield.png";
import nokia3360 from "./assist/productsBrand/Nokia-3360.png";
import watch from "./assist/productsBrand/watch.png";
import shose from "./assist/productsBrand/shose.png";
import tShirt from "./assist/productsBrand/t-shirt.png";

function App() {
  let cetagoryJson = [
    {
      id: 1,
      tittle: "Women's & Girls' Fashion",
      icon: <LiaTshirtSolid />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Traditional Wear",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Kurtis",
              image:
                "/catagory/Womens&GirlsFashion/(1)TraditionalWear/Kurtis.jpg",
            },
            {
              id: 2,
              tittle: "Palazzo Pants & Culottes",
              image:
                "/catagory/Womens&GirlsFashion/(1)TraditionalWear/PalazzoPants&Culottes.jpg",
            },
            {
              id: 3,
              tittle: "Pants, Palazzos & Capris",
              image:
                "/catagory/Womens&GirlsFashion/(1)TraditionalWear/Pants,Palazzos&Capris.jpg",
            },
            {
              id: 4,
              tittle: "Party Kameez & Gowns",
              image:
                "/catagory/Womens&GirlsFashion/(1)TraditionalWear/PartyKameez&Gowns.jpg",
            },
            {
              id: 5,
              tittle: "Sarees",
              image:
                "/catagory/Womens&GirlsFashion/(1)TraditionalWear/Sarees.jpg",
            },
            {
              id: 6,
              tittle: "Shalwar Kameez",
              image:
                "/catagory/Womens&GirlsFashion/(1)TraditionalWear/ShalwarKameez.jpg",
            },
            {
              id: 7,
              tittle: "Unstitched Fabric",
              image:
                "/catagory/Womens&GirlsFashion/(1)TraditionalWear/UnstitchedFabric.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Muslim Wear",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Abayas & Long Dresses",
              image:
                "/catagory/Womens&GirlsFashion/(2)MuslimWear/Abayas&LongDresses.jpg",
            },
            {
              id: 2,
              tittle: "Brooches",
              image: "/catagory/Womens&GirlsFashion/(2)MuslimWear/Brooches.jpg",
            },
            {
              id: 3,
              tittle: "Hijabs",
              image: "/catagory/Womens&GirlsFashion/(2)MuslimWear/Hijabs.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Western Wear",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Dresses",
              image: "/catagory/Womens&GirlsFashion/(3)WesternWear/Dresses.jpg",
            },
            {
              id: 2,
              tittle: "Skirts",
              image: "/catagory/Womens&GirlsFashion/(3)WesternWear/Skirts.jpg",
            },
            {
              id: 3,
              tittle: "Tops",
              image: "/catagory/Womens&GirlsFashion/(3)WesternWear/Tops.jpg",
            },
            {
              id: 4,
              tittle: "T-Shirts",
              image:
                "/catagory/Womens&GirlsFashion/(3)WesternWear/T-Shirts.jpg",
            },
            {
              id: 5,
              tittle: "Tunics",
              image: "/catagory/Womens&GirlsFashion/(3)WesternWear/Tunics.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Innerwear",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bras",
              image: "/catagory/Womens&GirlsFashion/(4)Innerwear/Bras.jpg",
            },
            {
              id: 2,
              tittle: "Lingerie Sets",
              image:
                "/catagory/Womens&GirlsFashion/(4)Innerwear/LingerieSets.jpg",
            },
            {
              id: 3,
              tittle: "Panties",
              image: "/catagory/Womens&GirlsFashion/(4)Innerwear/Panties.jpg",
            },
            {
              id: 4,
              tittle: "Robes & Bodysuits",
              image:
                "/catagory/Womens&GirlsFashion/(4)Innerwear/Robes&Bodysuits.jpg",
            },
            {
              id: 5,
              tittle: "Shapewear",
              image: "/catagory/Womens&GirlsFashion/(4)Innerwear/Shapewear.jpg",
            },
            {
              id: 6,
              tittle: "Sleep & Loungewear",
              image:
                "/catagory/Womens&GirlsFashion/(4)Innerwear/Sleep&Loungewear.jpg",
            },
            {
              id: 7,
              tittle: "Tank Tops",
              image: "/catagory/Womens&GirlsFashion/(4)Innerwear/TankTops.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Shoes",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Flats",
              image: "/catagory/Womens&GirlsFashion/(5)Shoes/Flats.jpg",
            },
            {
              id: 2,
              tittle: "Heels",
              image: "/catagory/Womens&GirlsFashion/(5)Shoes/Heels.jpg",
            },
            {
              id: 3,
              tittle: "Pump Shoes",
              image: "/catagory/Womens&GirlsFashion/(5)Shoes/PumpShoes.jpg",
            },
            {
              id: 4,
              tittle: "Sneakers",
              image: "/catagory/Womens&GirlsFashion/(5)Shoes/Sneakers.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Bags",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Backpacks",
              image: "/catagory/Womens&GirlsFashion/(6)Bags/Backpacks.jpg",
            },
            {
              id: 2,
              tittle: "Crossbody & Shoulder Bags",
              image:
                "/catagory/Womens&GirlsFashion/(6)Bags/Crossbody&ShoulderBags.jpg",
            },
            {
              id: 3,
              tittle: "Top Handle Bags",
              image: "/catagory/Womens&GirlsFashion/(6)Bags/TopHandleBags.jpg",
            },
            {
              id: 4,
              tittle: "Wallets",
              image: "/catagory/Womens&GirlsFashion/(6)Bags/Wallets.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Watches",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Accessories",
              image: "/catagory/Womens&GirlsFashion/(7)Watches/Accessories.jpg",
            },
            {
              id: 2,
              tittle: "Business",
              image: "/catagory/Womens&GirlsFashion/(7)Watches/Business.jpg",
            },
            {
              id: 3,
              tittle: "Casual",
              image: "/catagory/Womens&GirlsFashion/(7)Watches/Casual.jpg",
            },
            {
              id: 4,
              tittle: "Fashion",
              image: "/catagory/Womens&GirlsFashion/(7)Watches/Fashion.jpg",
            },
            {
              id: 5,
              tittle: "Sports",
              image: "/catagory/Womens&GirlsFashion/(7)Watches/Sports.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      tittle: "Health & Beauty",
      icon: <LuSofa />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Skin Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bioaqua",
              image: "/catagory/Health&Beauty/(1)SkinCare/Bioaqua.jpg",
            },
            {
              id: 2,
              tittle: "Face Mask & Packs",
              image: "/catagory/Health&Beauty/(1)SkinCare/FaceMask&Packs.jpg",
            },
            {
              id: 3,
              tittle: "Face Wash & Cleansers",
              image:
                "/catagory/Health&Beauty/(1)SkinCare/FaceWash&Cleansers.jpg",
            },
            {
              id: 4,
              tittle: "Laikou",
              image: "/catagory/Health&Beauty/(1)SkinCare/Laikou.jpg",
            },
            {
              id: 5,
              tittle: "Lip Balmand Treatment",
              image:
                "/catagory/Health&Beauty/(1)SkinCare/LipBalmandTreatment.jpg",
            },
            {
              id: 6,
              tittle: "Mamaearth",
              image: "/catagory/Health&Beauty/(1)SkinCare/Mamaearth.jpg",
            },
            {
              id: 7,
              tittle: "Moisturizersand Cream",
              image:
                "/catagory/Health&Beauty/(1)SkinCare/MoisturizersandCream.jpg",
            },
            {
              id: 8,
              tittle: "Night Cream",
              image: "/catagory/Health&Beauty/(1)SkinCare/NightCream.jpg",
            },
            {
              id: 9,
              tittle: "Serum & Essence",
              image: "/catagory/Health&Beauty/(1)SkinCare/Serum&Essence.jpg",
            },
            {
              id: 10,
              tittle: "Simple",
              image: "/catagory/Health&Beauty/(1)SkinCare/Simple.jpg",
            },
            {
              id: 11,
              tittle: "Sunscreen and Aftersun",
              image:
                "/catagory/Health&Beauty/(1)SkinCare/SunscreenandAftersun.jpg",
            },
            {
              id: 12,
              tittle: "Toner & Mists",
              image: "/catagory/Health&Beauty/(1)SkinCare/Toner&Mists.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Hair Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Conditioner",
              image: "/catagory/Health&Beauty/(2)HairCare/Conditioner.jpg",
            },
            {
              id: 2,
              tittle: "Dove",
              image: "/catagory/Health&Beauty/(2)HairCare/Dove.jpg",
            },
            {
              id: 3,
              tittle: "Hair Care Accessories",
              image:
                "/catagory/Health&Beauty/(2)HairCare/HairCareAccessories.jpg",
            },
            {
              id: 4,
              tittle: "Hair Coloring",
              image: "/catagory/Health&Beauty/(2)HairCare/HairColoring.jpg",
            },
            {
              id: 5,
              tittle: "Hair Oils",
              image: "/catagory/Health&Beauty/(2)HairCare/HairOils.jpg",
            },
            {
              id: 6,
              tittle: "Hair Treatments",
              image: "/catagory/Health&Beauty/(2)HairCare/HairTreatments.jpg",
            },
            {
              id: 7,
              tittle: "Parachute",
              image: "/catagory/Health&Beauty/(2)HairCare/Parachute.jpg",
            },
            {
              id: 8,
              tittle: "RiBANA",
              image: "/catagory/Health&Beauty/(2)HairCare/RiBANA.jpg",
            },
            {
              id: 9,
              tittle: "Shampoo",
              image: "/catagory/Health&Beauty/(2)HairCare/Shampoo.jpg",
            },
            {
              id: 10,
              tittle: "Sunsilk",
              image: "/catagory/Health&Beauty/(2)HairCare/Sunsilk.jpg",
            },
            {
              id: 11,
              tittle: "Tresemme",
              image: "/catagory/Health&Beauty/(2)HairCare/Tresemme.jpg",
            },
            {
              id: 12,
              tittle: "Wow Skin Science",
              image: "/catagory/Health&Beauty/(2)HairCare/WowSkinScience.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Makeup",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Eyes",
              image: "/catagory/Health&Beauty/(3)Makeup/Eyes.jpg",
            },
            {
              id: 2,
              tittle: "Face",
              image: "/catagory/Health&Beauty/(3)Makeup/Face.jpg",
            },
            {
              id: 3,
              tittle: "Fenty Beauty",
              image: "/catagory/Health&Beauty/(3)Makeup/FentyBeauty.jpg",
            },
            {
              id: 4,
              tittle: "Lips",
              image: "/catagory/Health&Beauty/(3)Makeup/Lips.jpg",
            },
            {
              id: 5,
              tittle: "M.A.C",
              image: "/catagory/Health&Beauty/(3)Makeup/M.A.C.jpg",
            },
            {
              id: 6,
              tittle: "Makeup Accessories",
              image: "/catagory/Health&Beauty/(3)Makeup/MakeupAccessories.jpg",
            },
            {
              id: 7,
              tittle: "Makeup Palettes & Sets",
              image:
                "/catagory/Health&Beauty/(3)Makeup/MakeupPalettes&Sets.jpg",
            },
            {
              id: 8,
              tittle: "Makeup Removers",
              image: "/catagory/Health&Beauty/(3)Makeup/MakeupRemovers.jpg",
            },
            {
              id: 9,
              tittle: "Makeup Revolution",
              image: "/catagory/Health&Beauty/(3)Makeup/MakeupRevolution.jpg",
            },
            {
              id: 10,
              tittle: "Maybelline",
              image: "/catagory/Health&Beauty/(3)Makeup/Maybelline.jpg",
            },
            {
              id: 11,
              tittle: "Morphe",
              image: "/catagory/Health&Beauty/(3)Makeup/Morphe.jpg",
            },
            {
              id: 12,
              tittle: "Nails",
              image: "/catagory/Health&Beauty/(3)Makeup/Nails.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Fragrances",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Al Haramain",
              image: "/catagory/Health&Beauty/(4)Fragrances/AlHaramain.jpg",
            },
            {
              id: 2,
              tittle: "Aris",
              image: "/catagory/Health&Beauty/(4)Fragrances/Aris.jpg",
            },
            {
              id: 3,
              tittle: "Attar",
              image: "/catagory/Health&Beauty/(4)Fragrances/Attar.jpg",
            },
            {
              id: 4,
              tittle: "Calvin Klein",
              image: "/catagory/Health&Beauty/(4)Fragrances/CalvinKlein.jpg",
            },
            {
              id: 5,
              tittle: "Hugo Boss",
              image: "/catagory/Health&Beauty/(4)Fragrances/HugoBoss.jpg",
            },
            {
              id: 6,
              tittle: "Men's Body Spray",
              image: "/catagory/Health&Beauty/(4)Fragrances/MensBodySpray.jpg",
            },
            {
              id: 7,
              tittle: "Men's Perfume",
              image: "/catagory/Health&Beauty/(4)Fragrances/MensPerfume.jpg",
            },
            {
              id: 8,
              tittle: "My Perfumes",
              image: "/catagory/Health&Beauty/(4)Fragrances/MyPerfumes.jpg",
            },
            {
              id: 9,
              tittle: "Roll-on & Deo",
              image: "/catagory/Health&Beauty/(4)Fragrances/Roll-on&Deo.jpg",
            },
            {
              id: 10,
              tittle: "Versace",
              image: "/catagory/Health&Beauty/(4)Fragrances/Versace.jpg",
            },
            {
              id: 11,
              tittle: "Women's Body Spray",
              image:
                "/catagory/Health&Beauty/(4)Fragrances/WomensBodySpray.jpg",
            },
            {
              id: 12,
              tittle: "Women's Perfume",
              image: "/catagory/Health&Beauty/(4)Fragrances/WomensPerfume.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Beauty Tools",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Electric Massagers",
              image:
                "/catagory/Health&Beauty/(5)BeautyTools/ElectricMassagers.jpg",
            },
            {
              id: 2,
              tittle: "Eyelash Extension Tools",
              image:
                "/catagory/Health&Beauty/(5)BeautyTools/EyelashExtensionTools.jpg",
            },
            {
              id: 3,
              tittle: "Foot Care",
              image: "/catagory/Health&Beauty/(5)BeautyTools/FootCare.jpg",
            },
            {
              id: 4,
              tittle: "Hair Removal Accessories",
              image:
                "/catagory/Health&Beauty/(5)BeautyTools/HairRemovalAccessories.jpg",
            },
            {
              id: 5,
              tittle: "Hair Styling Appliances",
              image:
                "/catagory/Health&Beauty/(5)BeautyTools/HairStylingAppliances.jpg",
            },
            {
              id: 6,
              tittle: "Kemei",
              image: "/catagory/Health&Beauty/(5)BeautyTools/Kemei.jpg",
            },
            {
              id: 7,
              tittle: "Nail Extension Tools",
              image:
                "/catagory/Health&Beauty/(5)BeautyTools/NailExtensionTools.jpg",
            },
            {
              id: 8,
              tittle: "Nova",
              image: "/catagory/Health&Beauty/(5)BeautyTools/Nova.jpg",
            },
            {
              id: 9,
              tittle: "Panasonic",
              image: "/catagory/Health&Beauty/(5)BeautyTools/Panasonic.jpg",
            },
            {
              id: 10,
              tittle: "Philips",
              image: "/catagory/Health&Beauty/(5)BeautyTools/Philips.jpg",
            },
            {
              id: 11,
              tittle: "Skin Care Tools",
              image: "/catagory/Health&Beauty/(5)BeautyTools/SkinCareTools.jpg",
            },
            {
              id: 12,
              tittle: "Venus",
              image: "/catagory/Health&Beauty/(5)BeautyTools/Venus.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Bath & Body",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bath & Body Accessories",
              image:
                "/catagory/Health&Beauty/(6)Bath&Body/Bath&BodyAccessories.jpg",
            },
            {
              id: 2,
              tittle: "Body & Massage Oils",
              image:
                "/catagory/Health&Beauty/(6)Bath&Body/Body&MassageOils.jpg",
            },
            {
              id: 3,
              tittle: "Body Scrubs",
              image: "/catagory/Health&Beauty/(6)Bath&Body/BodyScrubs.jpg",
            },
            {
              id: 4,
              tittle: "Dettol",
              image: "/catagory/Health&Beauty/(6)Bath&Body/Dettol.jpg",
            },
            {
              id: 5,
              tittle: "Godrej NO1",
              image: "/catagory/Health&Beauty/(6)Bath&Body/GodrejNO1.jpg",
            },
            {
              id: 6,
              tittle: "Hair Removal",
              image: "/catagory/Health&Beauty/(6)Bath&Body/HairRemoval.jpg",
            },
            {
              id: 7,
              tittle: "Hand Care",
              image: "/catagory/Health&Beauty/(6)Bath&Body/HandCare.jpg",
            },
            {
              id: 8,
              tittle: "Lux",
              image: "/catagory/Health&Beauty/(6)Bath&Body/Lux.jpg",
            },
            {
              id: 9,
              tittle: "Mollywaiz",
              image: "/catagory/Health&Beauty/(6)Bath&Body/Mollywaiz.jpg",
            },
            {
              id: 10,
              tittle: "Soaps & Body Wash",
              image: "/catagory/Health&Beauty/(6)Bath&Body/Soaps&BodyWash.jpg",
            },
            {
              id: 11,
              tittle: "Talcum Powder",
              image: "/catagory/Health&Beauty/(6)Bath&Body/TalcumPowder.jpg",
            },
            {
              id: 12,
              tittle: "The Body Shop",
              image: "/catagory/Health&Beauty/(6)Bath&Body/TheBodyShop.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Personal Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Contact Lens",
              image: "/catagory/Health&Beauty/(7)PersonalCare/ContactLens.jpg",
            },
            {
              id: 2,
              tittle: "Dental Floss",
              image: "/catagory/Health&Beauty/(7)PersonalCare/DentalFloss.jpg",
            },
            {
              id: 3,
              tittle: "Ear Care",
              image: "/catagory/Health&Beauty/(7)PersonalCare/EarCare.jpg",
            },
            {
              id: 4,
              tittle: "Electric Toothbrush",
              image:
                "/catagory/Health&Beauty/(7)PersonalCare/ElectricToothbrush.jpg",
            },
            {
              id: 5,
              tittle: "Freedom",
              image: "/catagory/Health&Beauty/(7)PersonalCare/Freedom.jpg",
            },
            {
              id: 6,
              tittle: "Mouthwash",
              image: "/catagory/Health&Beauty/(7)PersonalCare/Mouthwash.jpg",
            },
            {
              id: 7,
              tittle: "Sanitary Napkins",
              image:
                "/catagory/Health&Beauty/(7)PersonalCare/SanitaryNapkins.jpg",
            },
            {
              id: 8,
              tittle: "Senora",
              image: "/catagory/Health&Beauty/(7)PersonalCare/Senora.jpg",
            },
            {
              id: 9,
              tittle: "Teeth Whitening",
              image:
                "/catagory/Health&Beauty/(7)PersonalCare/TeethWhitening.jpg",
            },
            {
              id: 10,
              tittle: "Toothbrush",
              image: "/catagory/Health&Beauty/(7)PersonalCare/Toothbrush.jpg",
            },
            {
              id: 11,
              tittle: "Toothpaste",
              image: "/catagory/Health&Beauty/(7)PersonalCare/Toothpaste.jpg",
            },
            {
              id: 12,
              tittle: "Whisper",
              image: "/catagory/Health&Beauty/(7)PersonalCare/Whisper.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Men's Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Aftershave & Foam",
              image: "/catagory/Health&Beauty/(8)MensCare/Aftershave&Foam.jpg",
            },
            {
              id: 2,
              tittle: "Beardo",
              image: "/catagory/Health&Beauty/(8)MensCare/Beardo.jpg",
            },
            {
              id: 3,
              tittle: "Body and Skin Care",
              image: "/catagory/Health&Beauty/(8)MensCare/BodyandSkinCare.jpg",
            },
            {
              id: 4,
              tittle: "Gillette",
              image: "/catagory/Health&Beauty/(8)MensCare/Gillette.jpg",
            },
            {
              id: 5,
              tittle: "Hair Care",
              image: "/catagory/Health&Beauty/(8)MensCare/HairCare.jpg",
            },
            {
              id: 6,
              tittle: "Men's Body Spray",
              image: "/catagory/Health&Beauty/(8)MensCare/MensBodySpray.jpg",
            },
            {
              id: 7,
              tittle: "Men's Perfume",
              image: "/catagory/Health&Beauty/(8)MensCare/MensPerfume.jpg",
            },
            {
              id: 8,
              tittle: "Muuchstac",
              image: "/catagory/Health&Beauty/(8)MensCare/Muuchstac.jpg",
            },
            {
              id: 9,
              tittle: "Nivea",
              image: "/catagory/Health&Beauty/(8)MensCare/Nivea.jpg",
            },
            {
              id: 10,
              tittle: "Shaving & Grooming",
              image: "/catagory/Health&Beauty/(8)MensCare/Shaving&Grooming.jpg",
            },
            {
              id: 11,
              tittle: "Sport's Nutrition",
              image: "/catagory/Health&Beauty/(8)MensCare/SportsNutrition.jpg",
            },
            {
              id: 12,
              tittle: "Urban Gabru",
              image: "/catagory/Health&Beauty/(8)MensCare/UrbanGabru.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      tittle: "Watches, Bags, Jewellery",
      icon: <TbDeviceWatchExclamation />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Kids Bags",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Backpacks",
              image: "/catagory/WatchesBagsJewellery/(1)KidsBags/Backpacks.jpg",
            },
            {
              id: 2,
              tittle: "Bags",
              image: "/catagory/WatchesBagsJewellery/(1)KidsBags/Bags.jpg",
            },
            {
              id: 3,
              tittle: "School Bags & Backpack",
              image:
                "/catagory/WatchesBagsJewellery/(1)KidsBags/SchoolBags&Backpack.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Laptop Bags & Cases",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Backpacks",
              image:
                "/catagory/WatchesBagsJewellery/(2)LaptopBags&Cases/Backpacks.jpg",
            },
            {
              id: 2,
              tittle: "Briefcases",
              image:
                "/catagory/WatchesBagsJewellery/(2)LaptopBags&Cases/Briefcases.jpg",
            },
            {
              id: 3,
              tittle: "Laptopcases",
              image:
                "/catagory/WatchesBagsJewellery/(2)LaptopBags&Cases/Laptopcases.jpg",
            },
            {
              id: 4,
              tittle: "Shoulder & Messenger Bags",
              image:
                "/catagory/WatchesBagsJewellery/(2)LaptopBags&Cases/Shoulder&MessengerBags.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Luggage",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Carry-Ons",
              image: "/catagory/WatchesBagsJewellery/(3)Luggage/Carry-Ons.jpg",
            },
            {
              id: 2,
              tittle: "Kids Luggage",
              image:
                "/catagory/WatchesBagsJewellery/(3)Luggage/KidsLuggage.jpg",
            },
            {
              id: 3,
              tittle: "Luggage Sets",
              image:
                "/catagory/WatchesBagsJewellery/(3)Luggage/LuggageSets.jpg",
            },
            {
              id: 4,
              tittle: "Suitcases",
              image: "/catagory/WatchesBagsJewellery/(3)Luggage/Suitcases.jpg",
            },
            {
              id: 5,
              tittle: "Travel Duffels",
              image:
                "/catagory/WatchesBagsJewellery/(3)Luggage/TravelDuffels.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Travel Bags",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Waist Packs",
              image:
                "/catagory/WatchesBagsJewellery/(4)TravelBags/WaistPacks.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Men's Bags",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Backpacks",
              image: "/catagory/WatchesBagsJewellery/(5)MensBags/Backpacks.jpg",
            },
            {
              id: 2,
              tittle: "Business Bags",
              image:
                "/catagory/WatchesBagsJewellery/(5)MensBags/BusinessBags.jpg",
            },
            {
              id: 3,
              tittle: "Cross body Bags",
              image:
                "/catagory/WatchesBagsJewellery/(5)MensBags/CrossbodyBags.jpg",
            },
            {
              id: 4,
              tittle: "Messenger Bags",
              image:
                "/catagory/WatchesBagsJewellery/(5)MensBags/MessengerBags.jpg",
            },
            {
              id: 5,
              tittle: "Tote Bags",
              image: "/catagory/WatchesBagsJewellery/(5)MensBags/ToteBags.jpg",
            },
            {
              id: 6,
              tittle: "Wallets & Accessories",
              image:
                "/catagory/WatchesBagsJewellery/(5)MensBags/Wallets&Accessories.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Women's Bags",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Backpacks",
              image:
                "/catagory/WatchesBagsJewellery/(6)WomensBags/Backpacks.jpg",
            },
            {
              id: 2,
              tittle: "Bag Charms & Accessories",
              image:
                "/catagory/WatchesBagsJewellery/(6)WomensBags/BagCharms&Accessories.jpg",
            },
            {
              id: 3,
              tittle: "Clutches",
              image:
                "/catagory/WatchesBagsJewellery/(6)WomensBags/Clutches.jpg",
            },
            {
              id: 4,
              tittle: "Cross Body & Shoulder Bags",
              image:
                "/catagory/WatchesBagsJewellery/(6)WomensBags/CrossBody&ShoulderBags.jpg",
            },
            {
              id: 5,
              tittle: "Top-Handle Bags",
              image:
                "/catagory/WatchesBagsJewellery/(6)WomensBags/Top-HandleBags.jpg",
            },
            {
              id: 6,
              tittle: "Tote Bags",
              image:
                "/catagory/WatchesBagsJewellery/(6)WomensBags/ToteBags.jpg",
            },
            {
              id: 7,
              tittle: "Wallets",
              image: "/catagory/WatchesBagsJewellery/(6)WomensBags/Wallets.jpg",
            },
            {
              id: 8,
              tittle: "Wristlets",
              image:
                "/catagory/WatchesBagsJewellery/(6)WomensBags/Wristlets.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Men's Watches",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Business",
              image:
                "/catagory/WatchesBagsJewellery/(7)MensWatches/Business.jpg",
            },
            {
              id: 2,
              tittle: "Casual",
              image: "/catagory/WatchesBagsJewellery/(7)MensWatches/Casual.jpg",
            },
            {
              id: 3,
              tittle: "Fashion",
              image:
                "/catagory/WatchesBagsJewellery/(7)MensWatches/Fashion.jpg",
            },
            {
              id: 4,
              tittle: "Sports",
              image: "/catagory/WatchesBagsJewellery/(7)MensWatches/Sports.jpg",
            },
            {
              id: 5,
              tittle: "Accessories",
              image:
                "/catagory/WatchesBagsJewellery/(7)MensWatches/Accessories.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Women's Watches",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Business",
              image:
                "/catagory/WatchesBagsJewellery/(8)WomensWatches/Business.jpg",
            },
            {
              id: 2,
              tittle: "Fashion",
              image:
                "/catagory/WatchesBagsJewellery/(8)WomensWatches/Fashion.jpg",
            },
            {
              id: 3,
              tittle: "Casual",
              image:
                "/catagory/WatchesBagsJewellery/(8)WomensWatches/Casual.jpg",
            },
            {
              id: 4,
              tittle: "Sports",
              image:
                "/catagory/WatchesBagsJewellery/(8)WomensWatches/Sports.jpg",
            },
            {
              id: 5,
              tittle: "Accessories",
              image:
                "/catagory/WatchesBagsJewellery/(8)WomensWatches/Accessories.jpg",
            },
          ],
        },
        {
          id: 9,
          tittle: "Kids Watches",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Boy's",
              image: "/catagory/WatchesBagsJewellery/(9)KidsWatches/Boys.jpg",
            },
            {
              id: 2,
              tittle: "Girl's",
              image: "/catagory/WatchesBagsJewellery/(9)KidsWatches/Girls.jpg",
            },
          ],
        },
        {
          id: 10,
          tittle: "Women's Jewellery",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bracelets",
              image:
                "/catagory/WatchesBagsJewellery/(10)WomensJewellery/Bracelets.jpg",
            },
            {
              id: 2,
              tittle: "Earrings",
              image:
                "/catagory/WatchesBagsJewellery/(10)WomensJewellery/Earrings.jpg",
            },
            {
              id: 3,
              tittle: "Jewellery Storage",
              image:
                "/catagory/WatchesBagsJewellery/(10)WomensJewellery/JewelleryStorage.jpg",
            },
            {
              id: 4,
              tittle: "Necklaces",
              image:
                "/catagory/WatchesBagsJewellery/(10)WomensJewellery/Necklaces.jpg",
            },
            {
              id: 5,
              tittle: "Nose Pin & Body Piercings",
              image:
                "/catagory/WatchesBagsJewellery/(10)WomensJewellery/NosePin&BodyPiercings.jpg",
            },
            {
              id: 6,
              tittle: "Rings",
              image:
                "/catagory/WatchesBagsJewellery/(10)WomensJewellery/Rings.jpg",
            },
          ],
        },
        {
          id: 11,
          tittle: "Men's Jewellery",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bracelets",
              image:
                "/catagory/WatchesBagsJewellery/(11)MensJewellery/Bracelets.jpg",
            },
            {
              id: 2,
              tittle: "Earrings",
              image:
                "/catagory/WatchesBagsJewellery/(11)MensJewellery/Earrings.jpg",
            },
            {
              id: 3,
              tittle: "Necklaces",
              image:
                "/catagory/WatchesBagsJewellery/(11)MensJewellery/Necklaces.jpg",
            },
            {
              id: 4,
              tittle: "Pendants",
              image:
                "/catagory/WatchesBagsJewellery/(11)MensJewellery/Pendants.jpg",
            },
            {
              id: 5,
              tittle: "Rings",
              image:
                "/catagory/WatchesBagsJewellery/(11)MensJewellery/Rings.jpg",
            },
            {
              id: 6,
              tittle: "Tieclips",
              image:
                "/catagory/WatchesBagsJewellery/(11)MensJewellery/Tieclips.jpg",
            },
          ],
        },
        {
          id: 12,
          tittle: "Sunglasses",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Men's Sunglasses",
              image:
                "/catagory/WatchesBagsJewellery/(12)Sunglasses/MensSunglasses.jpg",
            },
            {
              id: 2,
              tittle: "Women's Sunglasses",
              image:
                "/catagory/WatchesBagsJewellery/(12)Sunglasses/WomensSunglasses.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      tittle: "Men's & Boys' Fashion",
      icon: <PiShirtFoldedLight />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Clothing",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Casual Shirts",
              image: "/catagory/Mens&BoysFashion/(1)Clothing/CasualShirts.jpg",
            },
            {
              id: 2,
              tittle: "Gabardines and Chinos",
              image:
                "/catagory/Mens&BoysFashion/(1)Clothing/GabardinesandChinos.jpg",
            },
            {
              id: 3,
              tittle: "Jeans",
              image: "/catagory/Mens&BoysFashion/(1)Clothing/Jeans.jpg",
            },
            {
              id: 4,
              tittle: "Joggers & Sweats",
              image:
                "/catagory/Mens&BoysFashion/(1)Clothing/Joggers&Sweats.jpg",
            },
            {
              id: 5,
              tittle: "Kurtas and Panjabis",
              image:
                "/catagory/Mens&BoysFashion/(1)Clothing/KurtasandPanjabis.jpg",
            },
            {
              id: 6,
              tittle: "Polo Shirts",
              image: "/catagory/Mens&BoysFashion/(1)Clothing/PoloShirts.jpg",
            },
            {
              id: 7,
              tittle: "Rain Coats & Trenches",
              image:
                "/catagory/Mens&BoysFashion/(1)Clothing/RainCoats&Trenches.jpg",
            },
            {
              id: 8,
              tittle: "Socks",
              image: "/catagory/Mens&BoysFashion/(1)Clothing/Socks.jpg",
            },
            {
              id: 9,
              tittle: "Trunks & Boxers",
              image: "/catagory/Mens&BoysFashion/(1)Clothing/Trunks&Boxers.jpg",
            },
            {
              id: 10,
              tittle: "T-Shirts",
              image: "/catagory/Mens&BoysFashion/(1)Clothing/T-Shirts.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Shoes",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Flip Flops",
              image: "/catagory/Mens&BoysFashion/(2)Shoes/FlipFlops.jpg",
            },
            {
              id: 2,
              tittle: "Formal Shoes",
              image: "/catagory/Mens&BoysFashion/(2)Shoes/FormalShoes.jpg",
            },
            {
              id: 3,
              tittle: "Rain Boots",
              image: "/catagory/Mens&BoysFashion/(2)Shoes/RainBoots.jpg",
            },
            {
              id: 4,
              tittle: "Sandals",
              image: "/catagory/Mens&BoysFashion/(2)Shoes/Sandals.jpg",
            },
            {
              id: 5,
              tittle: "Shoes Accessories",
              image: "/catagory/Mens&BoysFashion/(2)Shoes/ShoesAccessories.jpg",
            },
            {
              id: 6,
              tittle: "Slip-Ons & Loafers",
              image: "/catagory/Mens&BoysFashion/(2)Shoes/Slip-Ons&Loafers.jpg",
            },
            {
              id: 7,
              tittle: "Sneakers",
              image: "/catagory/Mens&BoysFashion/(2)Shoes/Sneakers.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Muslim Wear",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Accessories",
              image: "/catagory/Mens&BoysFashion/(3)MuslimWear/Accessories.jpg",
            },
            {
              id: 2,
              tittle: "Jubbahs",
              image: "/catagory/Mens&BoysFashion/(3)MuslimWear/Jubbahs.jpg",
            },
            {
              id: 3,
              tittle: "Muslimin Shirts",
              image:
                "/catagory/Mens&BoysFashion/(3)MuslimWear/MusliminShirts.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Accessories",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Belts",
              image: "/catagory/Mens&BoysFashion/(4)Accessories/Belts.jpg",
            },
            {
              id: 2,
              tittle: "Bow Ties",
              image: "/catagory/Mens&BoysFashion/(4)Accessories/BowTies.jpg",
            },
            {
              id: 3,
              tittle: "Brooches and Cufflinks",
              image:
                "/catagory/Mens&BoysFashion/(4)Accessories/BroochesandCufflinks.jpg",
            },
            {
              id: 4,
              tittle: "Hats & Caps",
              image: "/catagory/Mens&BoysFashion/(4)Accessories/Hats&Caps.jpg",
            },
            {
              id: 5,
              tittle: "Ties",
              image: "/catagory/Mens&BoysFashion/(4)Accessories/Ties.jpg",
            },
            {
              id: 6,
              tittle: "Umbrellas",
              image: "/catagory/Mens&BoysFashion/(4)Accessories/Umbrellas.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Bags",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Backpacks",
              image: "/catagory/Mens&BoysFashion/(5)Bags/Backpacks.jpg",
            },
            {
              id: 2,
              tittle: "Business Bags",
              image: "/catagory/Mens&BoysFashion/(5)Bags/BusinessBags.jpg",
            },
            {
              id: 3,
              tittle: "Crossbody Bags",
              image: "/catagory/Mens&BoysFashion/(5)Bags/CrossbodyBags.jpg",
            },
            {
              id: 4,
              tittle: "Messenger Bags",
              image: "/catagory/Mens&BoysFashion/(5)Bags/MessengerBags.jpg",
            },
            {
              id: 5,
              tittle: "Tote Bags",
              image: "/catagory/Mens&BoysFashion/(5)Bags/ToteBags.jpg",
            },
            {
              id: 6,
              tittle: "Wallets & Accessories",
              image:
                "/catagory/Mens&BoysFashion/(5)Bags/Wallets&Accessories.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Watches",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Fashion",
              image: "/catagory/Mens&BoysFashion/(6)Watches/Fashion.jpg",
            },
            {
              id: 2,
              tittle: "Casual",
              image: "/catagory/Mens&BoysFashion/(6)Watches/Casual.jpg",
            },
            {
              id: 3,
              tittle: "Business",
              image: "/catagory/Mens&BoysFashion/(6)Watches/Business.jpg",
            },
            {
              id: 4,
              tittle: "Sports",
              image: "/catagory/Mens&BoysFashion/(6)Watches/Sports.jpg",
            },
            {
              id: 5,
              tittle: "Accessories",
              image: "/catagory/Mens&BoysFashion/(6)Watches/Accessories.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Eyewear",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Eyeglasses",
              image: "/catagory/Mens&BoysFashion/(7)Eyewear/Eyeglasses.jpg",
            },
            {
              id: 2,
              tittle: "Sunglasses",
              image: "/catagory/Mens&BoysFashion/(7)Eyewear/Sunglasses.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Jewellery",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bracelets",
              image: "/catagory/Mens&BoysFashion/(8)Jewellery/Bracelets.jpg",
            },
            {
              id: 2,
              tittle: "Earrings",
              image: "/catagory/Mens&BoysFashion/(8)Jewellery/Earrings.jpg",
            },
            {
              id: 3,
              tittle: "Necklaces",
              image: "/catagory/Mens&BoysFashion/(8)Jewellery/Necklaces.jpg",
            },
            {
              id: 4,
              tittle: "Pendants",
              image: "/catagory/Mens&BoysFashion/(8)Jewellery/Pendants.jpg",
            },
            {
              id: 5,
              tittle: "Rings",
              image: "/catagory/Mens&BoysFashion/(8)Jewellery/Rings.jpg",
            },
            {
              id: 6,
              tittle: "Tieclips",
              image: "/catagory/Mens&BoysFashion/(8)Jewellery/Tieclips.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      tittle: "Mother & Baby",
      icon: <GiBabyBottle />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Diapering & Potty",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Avonee",
              image: "/catagory/Mother&Baby/(1)Diapering&Potty/Avonee.jpg",
            },
            {
              id: 2,
              tittle: "Cloth Diapers",
              image:
                "/catagory/Mother&Baby/(1)Diapering&Potty/ClothDiapers.jpg",
            },
            {
              id: 3,
              tittle: "Diaper Bags",
              image: "/catagory/Mother&Baby/(1)Diapering&Potty/DiaperBags.jpg",
            },
            {
              id: 4,
              tittle: "Diapers",
              image: "/catagory/Mother&Baby/(1)Diapering&Potty/Diapers.jpg",
            },
            {
              id: 5,
              tittle: "Happy Nappy",
              image: "/catagory/Mother&Baby/(1)Diapering&Potty/HappyNappy.jpg",
            },
            {
              id: 6,
              tittle: "Huggies",
              image: "/catagory/Mother&Baby/(1)Diapering&Potty/Huggies.jpg",
            },
            {
              id: 7,
              tittle: "Molfix",
              image: "/catagory/Mother&Baby/(1)Diapering&Potty/Molfix.jpg",
            },
            {
              id: 8,
              tittle: "Neocare",
              image: "/catagory/Mother&Baby/(1)Diapering&Potty/Neocare.jpg",
            },
            {
              id: 9,
              tittle: "Potty Chair & Seat",
              image:
                "/catagory/Mother&Baby/(1)Diapering&Potty/PottyChair&Seat.jpg",
            },
            {
              id: 10,
              tittle: "Smile",
              image: "/catagory/Mother&Baby/(1)Diapering&Potty/Smile.jpg",
            },
            {
              id: 11,
              tittle: "Twinkle",
              image: "/catagory/Mother&Baby/(1)Diapering&Potty/Twinkle.jpg",
            },
            {
              id: 12,
              tittle: "Wipes",
              image: "/catagory/Mother&Baby/(1)Diapering&Potty/Wipes.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Feeding",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Aptamil",
              image: "/catagory/Mother&Baby/(2)Feeding/Aptamil.jpg",
            },
            {
              id: 2,
              tittle: "Baby & Toddler Foods",
              image: "/catagory/Mother&Baby/(2)Feeding/Baby&ToddlerFoods.jpg",
            },
            {
              id: 3,
              tittle: "Bottle Feeding",
              image: "/catagory/Mother&Baby/(2)Feeding/BottleFeeding.jpg",
            },
            {
              id: 4,
              tittle: "Breastfeeding",
              image: "/catagory/Mother&Baby/(2)Feeding/Breastfeeding.jpg",
            },
            {
              id: 5,
              tittle: "Cerelac",
              image: "/catagory/Mother&Baby/(2)Feeding/Cerelac.jpg",
            },
            {
              id: 6,
              tittle: "Feeding Bowls, Cups & Bibs",
              image:
                "/catagory/Mother&Baby/(2)Feeding/FeedingBowls,Cups&Bibs.jpg",
            },
            {
              id: 7,
              tittle: "Feeding Chairs & Seats",
              image: "/catagory/Mother&Baby/(2)Feeding/FeedingChairs&Seats.jpg",
            },
            {
              id: 8,
              tittle: "Heinz",
              image: "/catagory/Mother&Baby/(2)Feeding/Heinz.jpg",
            },
            {
              id: 9,
              tittle: "Lactogen",
              image: "/catagory/Mother&Baby/(2)Feeding/Lactogen.jpg",
            },
            {
              id: 10,
              tittle: "Milk Formula",
              image: "/catagory/Mother&Baby/(2)Feeding/MilkFormula.jpg",
            },
            {
              id: 11,
              tittle: "Nan",
              image: "/catagory/Mother&Baby/(2)Feeding/Nan.jpg",
            },
            {
              id: 12,
              tittle: "Pacifiers",
              image: "/catagory/Mother&Baby/(2)Feeding/Pacifiers.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Baby Personal Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Baby Detergent",
              image:
                "/catagory/Mother&Baby/(3)BabyPersonalCare/BabyDetergent.jpg",
            },
            {
              id: 2,
              tittle: "Bathing Tubs & Toys",
              image:
                "/catagory/Mother&Baby/(3)BabyPersonalCare/BathingTubs&Toys.jpg",
            },
            {
              id: 3,
              tittle: "Bebble",
              image: "/catagory/Mother&Baby/(3)BabyPersonalCare/Bebble.jpg",
            },
            {
              id: 4,
              tittle: "Just For Baby",
              image:
                "/catagory/Mother&Baby/(3)BabyPersonalCare/JustForBaby.jpg",
            },
            {
              id: 5,
              tittle: "Kodomo",
              image: "/catagory/Mother&Baby/(3)BabyPersonalCare/Kodomo.jpg",
            },
            {
              id: 6,
              tittle: "Lotions & Creams",
              image:
                "/catagory/Mother&Baby/(3)BabyPersonalCare/Lotions&Creams.jpg",
            },
            {
              id: 7,
              tittle: "Oils",
              image: "/catagory/Mother&Baby/(3)BabyPersonalCare/Oils.jpg",
            },
            {
              id: 8,
              tittle: "Powders",
              image: "/catagory/Mother&Baby/(3)BabyPersonalCare/Powders.jpg",
            },
            {
              id: 9,
              tittle: "Shampoo & Conditioners",
              image:
                "/catagory/Mother&Baby/(3)BabyPersonalCare/Shampoo&Conditioners.jpg",
            },
            {
              id: 10,
              tittle: "Soaps & Body Wash",
              image:
                "/catagory/Mother&Baby/(3)BabyPersonalCare/Soaps&BodyWash.jpg",
            },
            {
              id: 11,
              tittle: "Toothbrushes & Toothpaste",
              image:
                "/catagory/Mother&Baby/(3)BabyPersonalCare/Toothbrushes&Toothpaste.jpg",
            },
            {
              id: 12,
              tittle: "Washcloths & Towels",
              image:
                "/catagory/Mother&Baby/(3)BabyPersonalCare/Washcloths&Towels.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Baby Gear",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Baby Car Seats",
              image: "/catagory/Mother&Baby/(4)BabyGear/BabyCarSeats.jpg",
            },
            {
              id: 2,
              tittle: "Baby Soft Carriers",
              image: "/catagory/Mother&Baby/(4)BabyGear/BabySoftCarriers.jpg",
            },
            {
              id: 3,
              tittle: "Bouncers & Jumpers",
              image: "/catagory/Mother&Baby/(4)BabyGear/Bouncers&Jumpers.jpg",
            },
            {
              id: 4,
              tittle: "KidsBags & Luggage",
              image: "/catagory/Mother&Baby/(4)BabyGear/KidsBags&Luggage.jpg",
            },
            {
              id: 5,
              tittle: "Kids Paradise",
              image: "/catagory/Mother&Baby/(4)BabyGear/KidsParadise.jpg",
            },
            {
              id: 6,
              tittle: "Kids World",
              image: "/catagory/Mother&Baby/(4)BabyGear/KidsWorld.jpg",
            },
            {
              id: 7,
              tittle: "Playards & Playpens",
              image: "/catagory/Mother&Baby/(4)BabyGear/Playards&Playpens.jpg",
            },
            {
              id: 8,
              tittle: "Strollers & Prams",
              image: "/catagory/Mother&Baby/(4)BabyGear/Strollers&Prams.jpg",
            },
            {
              id: 9,
              tittle: "Swings",
              image: "/catagory/Mother&Baby/(4)BabyGear/Swings.jpg",
            },
            {
              id: 10,
              tittle: "ToyHouse",
              image: "/catagory/Mother&Baby/(4)BabyGear/ToyHouse.jpg",
            },
            {
              id: 11,
              tittle: "Walkers",
              image: "/catagory/Mother&Baby/(4)BabyGear/Walkers.jpg",
            },
            {
              id: 12,
              tittle: "Wall Touch",
              image: "/catagory/Mother&Baby/(4)BabyGear/WallTouch.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Nursery",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Baby Bedding Sets",
              image: "/catagory/Mother&Baby/(5)Nursery/BabyBeddingSets.jpg",
            },
            {
              id: 2,
              tittle: "Baby Pillows & Protection",
              image:
                "/catagory/Mother&Baby/(5)Nursery/BabyPillows&Protection.jpg",
            },
            {
              id: 3,
              tittle: "Baby Quilts & Bed Covers",
              image:
                "/catagory/Mother&Baby/(5)Nursery/BabyQuilts&BedCovers.jpg",
            },
            {
              id: 4,
              tittle: "Blankets & Wrappers",
              image: "/catagory/Mother&Baby/(5)Nursery/Blankets&Wrappers.jpg",
            },
            {
              id: 5,
              tittle: "Cribs & Cradles",
              image: "/catagory/Mother&Baby/(5)Nursery/Cribs&Cradles.jpg",
            },
            {
              id: 6,
              tittle: "Frozen Bedroom Set",
              image: "/catagory/Mother&Baby/(5)Nursery/FrozenBedroomSet.jpg",
            },
            {
              id: 7,
              tittle: "Livingtex",
              image: "/catagory/Mother&Baby/(5)Nursery/Livingtex.jpg",
            },
            {
              id: 8,
              tittle: "Princess Canopy Bed",
              image: "/catagory/Mother&Baby/(5)Nursery/PrincessCanopyBed.jpg",
            },
            {
              id: 9,
              tittle: "Storage & Organization",
              image:
                "/catagory/Mother&Baby/(5)Nursery/Storage&Organization.jpg",
            },
            {
              id: 10,
              tittle: "Tanzina Boutiques",
              image: "/catagory/Mother&Baby/(5)Nursery/TanzinaBoutiques.jpg",
            },
            {
              id: 11,
              tittle: "Furniture Sets",
              image: "/catagory/Mother&Baby/(5)Nursery/FurnitureSets.jpg",
            },
            {
              id: 12,
              tittle: "Wall Touch",
              image: "/catagory/Mother&Baby/(5)Nursery/WallTouch.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Maternity Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Maternity Belts",
              image:
                "/catagory/Mother&Baby/(6)MaternityCare/MaternityBelts.jpg",
            },
            {
              id: 2,
              tittle: "Maternity Tops & Intimates",
              image:
                "/catagory/Mother&Baby/(6)MaternityCare/MaternityTops&Intimates.jpg",
            },
            {
              id: 3,
              tittle: "Moisturizers & Creams",
              image:
                "/catagory/Mother&Baby/(6)MaternityCare/Moisturizers&Creams.jpg",
            },
            {
              id: 4,
              tittle: "Palmers",
              image: "/catagory/Mother&Baby/(6)MaternityCare/Palmers.jpg",
            },
            {
              id: 5,
              tittle: "Pregnancy Pillows",
              image:
                "/catagory/Mother&Baby/(6)MaternityCare/PregnancyPillows.jpg",
            },
            {
              id: 6,
              tittle: "Zita Matenity Wear",
              image:
                "/catagory/Mother&Baby/(6)MaternityCare/ZitaMatenityWear.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Baby Care & Gifts",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Albums, Frames & Journals",
              image:
                "/catagory/Mother&Baby/(7)BabyCare&Gifts/Albums,Frames&Journals.jpg",
            },
            {
              id: 2,
              tittle: "Baby Monitoring",
              image:
                "/catagory/Mother&Baby/(7)BabyCare&Gifts/BabyMonitoring.jpg",
            },
            {
              id: 3,
              tittle: "Electrical Safety",
              image:
                "/catagory/Mother&Baby/(7)BabyCare&Gifts/ElectricalSafety.jpg",
            },
            {
              id: 4,
              tittle: "Keepsakes",
              image: "/catagory/Mother&Baby/(7)BabyCare&Gifts/Keepsakes.jpg",
            },
            {
              id: 5,
              tittle: "Masks & Repellents",
              image:
                "/catagory/Mother&Baby/(7)BabyCare&Gifts/Masks&Repellents.jpg",
            },
            {
              id: 6,
              tittle: "Nail Care",
              image: "/catagory/Mother&Baby/(7)BabyCare&Gifts/NailCare.jpg",
            },
            {
              id: 7,
              tittle: "Nasal Aspirators",
              image:
                "/catagory/Mother&Baby/(7)BabyCare&Gifts/NasalAspirators.jpg",
            },
            {
              id: 8,
              tittle: "Safety & Straps",
              image:
                "/catagory/Mother&Baby/(7)BabyCare&Gifts/Safety&Straps.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Kids Toys",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Action Figures & Collectibles",
              image:
                "/catagory/Mother&Baby/(8)KidsToys/ActionFigures&Collectibles.jpg",
            },
            {
              id: 2,
              tittle: "Arts & Crafts for Kids",
              image: "/catagory/Mother&Baby/(8)KidsToys/Arts&CraftsforKids.jpg",
            },
            {
              id: 3,
              tittle: "Ball Prit & Accessories",
              image:
                "/catagory/Mother&Baby/(8)KidsToys/BallPrit&Accessories.jpg",
            },
            {
              id: 4,
              tittle: "Block & Building Toys",
              image: "/catagory/Mother&Baby/(8)KidsToys/Block&BuildingToys.jpg",
            },
            {
              id: 5,
              tittle: "Doll & Accessories",
              image: "/catagory/Mother&Baby/(8)KidsToys/Doll&Accessories.jpg",
            },
            {
              id: 6,
              tittle: "Dress Up & Pretend Play",
              image:
                "/catagory/Mother&Baby/(8)KidsToys/DressUp&PretendPlay.jpg",
            },
            {
              id: 7,
              tittle: "Electronic toys",
              image: "/catagory/Mother&Baby/(8)KidsToys/Electronictoys.jpg",
            },
            {
              id: 8,
              tittle: "Learning & Education",
              image: "/catagory/Mother&Baby/(8)KidsToys/Learning&Education.jpg",
            },
            {
              id: 9,
              tittle: "Party Supplies",
              image: "/catagory/Mother&Baby/(8)KidsToys/PartySupplies.jpg",
            },
            {
              id: 10,
              tittle: "Puzzle",
              image: "/catagory/Mother&Baby/(8)KidsToys/Puzzle.jpg",
            },
            {
              id: 11,
              tittle: "Slime & Squishy Toys",
              image: "/catagory/Mother&Baby/(8)KidsToys/Slime&SquishyToys.jpg",
            },
            {
              id: 12,
              tittle: "Soft Toys",
              image: "/catagory/Mother&Baby/(8)KidsToys/SoftToys.jpg",
            },
          ],
        },
        {
          id: 9,
          tittle: "Baby & Toddler Toys",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Activity Gym & Playmats",
              image:
                "/catagory/Mother&Baby/(9)Baby&ToddlerToys/ActivityGym&Playmats.jpg",
            },
            {
              id: 2,
              tittle: "Ball",
              image: "/catagory/Mother&Baby/(9)Baby&ToddlerToys/Ball.jpg",
            },
            {
              id: 3,
              tittle: "Bath Toys",
              image: "/catagory/Mother&Baby/(9)Baby&ToddlerToys/BathToys.jpg",
            },
            {
              id: 4,
              tittle: "Crib Toys & Attachments",
              image:
                "/catagory/Mother&Baby/(9)Baby&ToddlerToys/CribToys&Attachments.jpg",
            },
            {
              id: 5,
              tittle: "Early Learning",
              image:
                "/catagory/Mother&Baby/(9)Baby&ToddlerToys/EarlyLearning.jpg",
            },
            {
              id: 6,
              tittle: "Indoor Climbers & Structures",
              image:
                "/catagory/Mother&Baby/(9)Baby&ToddlerToys/IndoorClimbers&Structures.jpg",
            },
            {
              id: 7,
              tittle: "Push & PullToys",
              image:
                "/catagory/Mother&Baby/(9)Baby&ToddlerToys/Push&PullToys.jpg",
            },
            {
              id: 8,
              tittle: "Rocking & Spring Ride-Ons",
              image:
                "/catagory/Mother&Baby/(9)Baby&ToddlerToys/Rocking&SpringRide-Ons.jpg",
            },
            {
              id: 9,
              tittle: "Toyghor",
              image: "/catagory/Mother&Baby/(9)Baby&ToddlerToys/Toyghor.jpg",
            },
          ],
        },
        {
          id: 10,
          tittle: "Remote Control & Vehicles",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Die-Cast Vehicles",
              image:
                "/catagory/Mother&Baby/(10)RemoteControl&Vehicles/Die-CastVehicles.jpg",
            },
            {
              id: 2,
              tittle: "Drone Guru",
              image:
                "/catagory/Mother&Baby/(10)RemoteControl&Vehicles/DroneGuru.png",
            },
            {
              id: 3,
              tittle: "Drones & Accessories",
              image:
                "/catagory/Mother&Baby/(10)RemoteControl&Vehicles/Drones&Accessories.jpg",
            },
            {
              id: 4,
              tittle: "Hot Wheels",
              image:
                "/catagory/Mother&Baby/(10)RemoteControl&Vehicles/HotWheels.jpg",
            },
            {
              id: 5,
              tittle: "Khelna Bank BD",
              image:
                "/catagory/Mother&Baby/(10)RemoteControl&Vehicles/KhelnaBankBD.jpg",
            },
            {
              id: 6,
              tittle: "Play Trains & Railway Sets",
              image:
                "/catagory/Mother&Baby/(10)RemoteControl&Vehicles/PlayTrains&RailwaySets.jpg",
            },
            {
              id: 7,
              tittle: "Play Vehicles",
              image:
                "/catagory/Mother&Baby/(10)RemoteControl&Vehicles/PlayVehicles.jpg",
            },
            {
              id: 8,
              tittle: "RC Vehicles & Batteries",
              image:
                "/catagory/Mother&Baby/(10)RemoteControl&Vehicles/RCVehicles&Batteries.jpg",
            },
            {
              id: 9,
              tittle: "Takara Tomy",
              image:
                "/catagory/Mother&Baby/(10)RemoteControl&Vehicles/TakaraTomy.jpg",
            },
            {
              id: 10,
              tittle: "Wright Flyer",
              image:
                "/catagory/Mother&Baby/(10)RemoteControl&Vehicles/WrightFlyer.jpg",
            },
          ],
        },
        {
          id: 11,
          tittle: "Sports & Outdoor Play",
          nastedCatagory: [
            {
              id: 1,
              tittle: "ACI Captain Toys",
              image:
                "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/ACICaptainToys.jpg",
            },
            {
              id: 2,
              tittle: "Boxing",
              image: "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/Boxing.jpg",
            },
            {
              id: 3,
              tittle: "Fidget Spinners & Cubes",
              image:
                "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/FidgetSpinners&Cubes.jpg",
            },
            {
              id: 4,
              tittle: "Kids Bikes & Accessories",
              image:
                "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/KidsBikes&Accessories.jpg",
            },
            {
              id: 5,
              tittle: "Kids Tricycles",
              image:
                "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/KidsTricycles.jpg",
            },
            {
              id: 6,
              tittle: "Outdoor Toys",
              image:
                "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/OutdoorToys.jpg",
            },
            {
              id: 7,
              tittle: "Play Sets",
              image:
                "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/PlaySets.jpg",
            },
            {
              id: 8,
              tittle: "Play Tents & Tunnels",
              image:
                "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/PlayTents&Tunnels.jpg",
            },
            {
              id: 9,
              tittle: "Sports Play",
              image:
                "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/SportsPlay.jpg",
            },
            {
              id: 10,
              tittle: "Swimming Pool & Water Toys",
              image:
                "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/SwimmingPool&WaterToys.jpg",
            },
            {
              id: 11,
              tittle: "Toys Sports",
              image:
                "/catagory/Mother&Baby/(11)Sports&OutdoorPlay/ToysSports.jpg",
            },
          ],
        },
        {
          id: 12,
          tittle: "Traditional Games",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Board Games",
              image:
                "/catagory/Mother&Baby/(12)TraditionalGames/BoardGames.jpg",
            },
            {
              id: 2,
              tittle: "Card Games",
              image: "/catagory/Mother&Baby/(12)TraditionalGames/CardGames.jpg",
            },
            {
              id: 3,
              tittle: "Game Room Games",
              image:
                "/catagory/Mother&Baby/(12)TraditionalGames/GameRoomGames.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      tittle: "Electronics Device",
      icon: <TbDevices />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Smartphones",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Apple Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/ApplePhones.jpg",
            },
            {
              id: 2,
              tittle: "Infinix Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/InfinixPhones.jpg",
            },
            {
              id: 3,
              tittle: "Motorola Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/MotorolaPhones.jpg",
            },
            {
              id: 4,
              tittle: "OPPO Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/OPPOPhones.jpg",
            },
            {
              id: 5,
              tittle: "realme Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/realmePhones.jpg",
            },
            {
              id: 6,
              tittle: "Samsung Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/SamsungPhones.jpg",
            },
            {
              id: 7,
              tittle: "Symphony Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/SymphonyPhones.jpg",
            },
            {
              id: 8,
              tittle: "Tecno Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/TecnoPhones.jpg",
            },
            {
              id: 9,
              tittle: "vivo Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/vivoPhones.jpg",
            },
            {
              id: 10,
              tittle: "Walton Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/WaltonPhones.jpg",
            },
            {
              id: 11,
              tittle: "Xiaomi Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/XiaomiPhones.jpg",
            },
            {
              id: 12,
              tittle: "Pre-owned Phones",
              image:
                "/catagory/ElectronicsDevice/(1)Smartphones/PreOwnedPhones.png",
            },
          ],
        },
        {
          id: 2,
          tittle: "Feature Phone",
          nastedCatagory: [
            {
              id: 1,
              tittle: "5 Star Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/5StarFeaturePhones.jpg",
            },
            {
              id: 2,
              tittle: "Agetel Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/AgetelFeaturePhones.jpg",
            },
            {
              id: 3,
              tittle: "Benco Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/BencoFeaturePhones.jpg",
            },
            {
              id: 4,
              tittle: "Bengal Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/BengalFeaturePhones.jpg",
            },
            {
              id: 5,
              tittle: "by two Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/bytwoFeaturePhones.jpg",
            },
            {
              id: 6,
              tittle: "Geo Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/GeoFeaturePhones.jpg",
            },
            {
              id: 7,
              tittle: "Gphone Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/GphoneFeaturePhones.jpg",
            },
            {
              id: 8,
              tittle: "Linnex Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/LinnexFeaturePhones.jpg",
            },
            {
              id: 9,
              tittle: "Nokia Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/NokiaFeaturePhones.jpg",
            },
            {
              id: 10,
              tittle: "Symphony Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/SymphonyFeaturePhones.jpg",
            },
            {
              id: 11,
              tittle: "Tinmo Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/TinmoFeaturePhones.jpg",
            },
            {
              id: 12,
              tittle: "Walton Feature Phones",
              image:
                "/catagory/ElectronicsDevice/(2)FeaturePhone/WaltonFeaturePhones.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Tablets",
          nastedCatagory: [],
        },
        {
          id: 4,
          tittle: "Cameras",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Canon",
              image: "/catagory/ElectronicsDevice/(4)Cameras/Canon.jpg",
            },
            {
              id: 2,
              tittle: "Car Cameras",
              image: "/catagory/ElectronicsDevice/(4)Cameras/CarCameras.jpg",
            },
            {
              id: 3,
              tittle: "Drones",
              image: "/catagory/ElectronicsDevice/(4)Cameras/Drones.jpg",
            },
            {
              id: 4,
              tittle: "DSLR",
              image: "/catagory/ElectronicsDevice/(4)Cameras/DSLR.jpg",
            },
            {
              id: 5,
              tittle: "GoPro",
              image: "/catagory/ElectronicsDevice/(4)Cameras/GoPro.jpg",
            },
            {
              id: 6,
              tittle: "Insta360",
              image: "/catagory/ElectronicsDevice/(4)Cameras/Insta360.jpg",
            },
            {
              id: 7,
              tittle: "Mirrorless",
              image: "/catagory/ElectronicsDevice/(4)Cameras/Mirrorless.jpg",
            },
            {
              id: 8,
              tittle: "Nikon",
              image: "/catagory/ElectronicsDevice/(4)Cameras/Nikon.jpg",
            },
            {
              id: 9,
              tittle: "Security Cameras & Systems",
              image:
                "/catagory/ElectronicsDevice/(4)Cameras/SecurityCameras&Systems.jpg",
            },
            {
              id: 10,
              tittle: "Sony",
              image: "/catagory/ElectronicsDevice/(4)Cameras/Sony.jpg",
            },
            {
              id: 11,
              tittle: "Video & Action Camcorder",
              image:
                "/catagory/ElectronicsDevice/(4)Cameras/Video&ActionCamcorder.jpg",
            },
            {
              id: 12,
              tittle: "ZHIYUN",
              image: "/catagory/ElectronicsDevice/(4)Cameras/ZHIYUN.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Trendy Mobile Accessories",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Baseus Accessories",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/BaseusAccessories.jpg",
            },
            {
              id: 2,
              tittle: "Cables & Converters",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/Cables&Converters.jpg",
            },
            {
              id: 3,
              tittle: "CASIFY Accessories",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/CASIFYAccessories.jpg",
            },
            {
              id: 4,
              tittle: "Docks & Stands",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/Docks&Stands.jpg",
            },
            {
              id: 5,
              tittle: "Fashion Mobile Accessories",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/FashionMobileAccessories.jpg",
            },
            {
              id: 6,
              tittle: "Hontinga Accessories",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/HontingaAccessories.jpg",
            },
            {
              id: 7,
              tittle: "LENUO Accessories",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/LENUOAccessories.jpg",
            },
            {
              id: 8,
              tittle: "Phone Cases",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/PhoneCases.jpg",
            },
            {
              id: 9,
              tittle: "Phone Screen Protector",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/PhoneScreenProtector.jpg",
            },
            {
              id: 10,
              tittle: "Power Banks",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/PowerBanks.jpg",
            },
            {
              id: 11,
              tittle: "Wall Chargers",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/WallChargers.jpg",
            },
            {
              id: 12,
              tittle: "Xundd Accessories",
              image:
                "/catagory/ElectronicsDevice/(5)TrendyMobileAccessories/XunddAccessories.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Projectors",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Projector Screens",
              image:
                "/catagory/ElectronicsDevice/(6)Projectors/ProjectorScreens.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Gaming Console",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Nintendo Consoles",
              image:
                "/catagory/ElectronicsDevice/(7)GamingConsole/NintendoConsoles.jpg",
            },
            {
              id: 2,
              tittle: "Nintendo Games",
              image:
                "/catagory/ElectronicsDevice/(7)GamingConsole/NintendoGames.jpg",
            },
            {
              id: 3,
              tittle: "Other Gaming Consoles",
              image:
                "/catagory/ElectronicsDevice/(7)GamingConsole/OtherGamingConsoles.jpg",
            },
            {
              id: 4,
              tittle: "Play Station Console",
              image:
                "/catagory/ElectronicsDevice/(7)GamingConsole/PlayStationConsole.jpg",
            },
            {
              id: 5,
              tittle: "Play Station Controller",
              image:
                "/catagory/ElectronicsDevice/(7)GamingConsole/PlayStationController.jpg",
            },
            {
              id: 6,
              tittle: "Play Station Games",
              image:
                "/catagory/ElectronicsDevice/(7)GamingConsole/PlayStationGames.jpg",
            },
            {
              id: 7,
              tittle: "Xbox Consoles",
              image:
                "/catagory/ElectronicsDevice/(7)GamingConsole/XboxConsoles.jpg",
            },
            {
              id: 8,
              tittle: "Xbox Games",
              image:
                "/catagory/ElectronicsDevice/(7)GamingConsole/XboxGames.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Audio",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Headphones & Headsets",
              image:
                "/catagory/ElectronicsDevice/(8)Audio/Headphones&Headsets.jpg",
            },
            {
              id: 2,
              tittle: "Bluetooth Speaker",
              image:
                "/catagory/ElectronicsDevice/(8)Audio/BluetoothSpeaker.jpg",
            },
          ],
        },
        {
          id: 9,
          tittle: "Wearable",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Smartwatches",
              image: "/catagory/ElectronicsDevice/(9)Wearable/Smartwatches.jpg",
            },
          ],
        },
        {
          id: 10,
          tittle: "Laptops",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Acer",
              image: "/catagory/ElectronicsDevice/(10)Laptops/Acer.jpg",
            },
            {
              id: 2,
              tittle: "Apple",
              image: "/catagory/ElectronicsDevice/(10)Laptops/Apple.jpg",
            },
            {
              id: 3,
              tittle: "ASUS",
              image: "/catagory/ElectronicsDevice/(10)Laptops/ASUS.jpg",
            },
            {
              id: 4,
              tittle: "Dell",
              image: "/catagory/ElectronicsDevice/(10)Laptops/Dell.jpg",
            },
            {
              id: 5,
              tittle: "Gaming Laptops",
              image:
                "/catagory/ElectronicsDevice/(10)Laptops/GamingLaptops.jpg",
            },
            {
              id: 6,
              tittle: "HP",
              image: "/catagory/ElectronicsDevice/(10)Laptops/HP.jpg",
            },
            {
              id: 7,
              tittle: "Lenovo",
              image: "/catagory/ElectronicsDevice/(10)Laptops/Lenovo.jpg",
            },
            {
              id: 8,
              tittle: "Microsoft",
              image: "/catagory/ElectronicsDevice/(10)Laptops/Microsoft.jpg",
            },
            {
              id: 9,
              tittle: "MSI",
              image: "/catagory/ElectronicsDevice/(10)Laptops/MSI.jpg",
            },
            {
              id: 10,
              tittle: "Realme",
              image: "/catagory/ElectronicsDevice/(10)Laptops/Realme.jpg",
            },
            {
              id: 11,
              tittle: "Walton",
              image: "/catagory/ElectronicsDevice/(10)Laptops/Walton.jpg",
            },
            {
              id: 12,
              tittle: "pixpix Like New",
              image:
                "/catagory/ElectronicsDevice/(10)Laptops/pixpixLikeNew.png",
            },
          ],
        },
        {
          id: 11,
          tittle: "Desktops",
          nastedCatagory: [
            {
              id: 1,
              tittle: "All-In-One",
              image: "/catagory/ElectronicsDevice/(11)Desktops/All-In-One.jpg",
            },
            {
              id: 2,
              tittle: "Customize PC",
              image: "/catagory/ElectronicsDevice/(11)Desktops/CustomizePC.jpg",
            },
          ],
        },
        {
          id: 12,
          tittle: "pixpix Like New",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Like New Laptop",
              image:
                "/catagory/ElectronicsDevice/(12)pixpixLikeNew/LikeNewLaptop.jpg",
            },
            {
              id: 2,
              tittle: "Like New Mobile",
              image:
                "/catagory/ElectronicsDevice/(12)pixpixLikeNew/LikeNewMobile.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      tittle: "TV & Home Appliances",
      icon: <TbFreezeColumn />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Television",
          nastedCatagory: [
            {
              id: 1,
              tittle: "LED Televisions",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/LEDTelevisions.jpg",
            },
            {
              id: 2,
              tittle: "OLED Televisions",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/OLEDTelevisions.jpg",
            },
            {
              id: 3,
              tittle: "Smart Television",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/SmartTelevision.jpg",
            },
            {
              id: 4,
              tittle: "Haier Televisions",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/HaierTelevisions.jpg",
            },
            {
              id: 5,
              tittle: "Minister Televisions",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/MinisterTelevisions.jpg",
            },
            {
              id: 6,
              tittle: "Samsung Televisions",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/SamsungTelevisions.jpg",
            },
            {
              id: 7,
              tittle: "Singer Televisions",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/SingerTelevisions.jpg",
            },
            {
              id: 8,
              tittle: "Sony Televisions",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/SonyTelevisions.jpg",
            },
            {
              id: 9,
              tittle: "Vision Televisions",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/VisionTelevisions.jpg",
            },
            {
              id: 10,
              tittle: "Walton Televisions",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/WaltonTelevisions.jpg",
            },
            {
              id: 11,
              tittle: "Xiaomi Televisions",
              image:
                "/catagory/TV&HomeAppliances/(1)Television/XiaomiTelevisions.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Home Audio",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bluetooth Speaker",
              image:
                "/catagory/TV&HomeAppliances/(2)HomeAudio/BluetoothSpeaker.jpg",
            },
            {
              id: 2,
              tittle: "Home Entertainment",
              image:
                "/catagory/TV&HomeAppliances/(2)HomeAudio/HomeEntertainment.jpg",
            },
            {
              id: 3,
              tittle: "Soundbars",
              image: "/catagory/TV&HomeAppliances/(2)HomeAudio/Soundbars.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "TV & Video Device",
          nastedCatagory: [
            {
              id: 1,
              tittle: "TV Receivers",
              image:
                "/catagory/TV&HomeAppliances/(3)TV&VideoDevice/TVReceivers.jpg",
            },
            {
              id: 2,
              tittle: "Blu-Ray DVD Players",
              image:
                "/catagory/TV&HomeAppliances/(3)TV&VideoDevice/Blu-RayDVDPlayers.jpg",
            },
            {
              id: 3,
              tittle: "Cables",
              image: "/catagory/TV&HomeAppliances/(3)TV&VideoDevice/Cables.jpg",
            },
            {
              id: 4,
              tittle: "TV Remote Controllers",
              image:
                "/catagory/TV&HomeAppliances/(3)TV&VideoDevice/TVRemoteControllers.jpg",
            },
            {
              id: 5,
              tittle: "Wall Mounts & Protectors",
              image:
                "/catagory/TV&HomeAppliances/(3)TV&VideoDevice/WallMounts&Protectors.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Cooling & Heating",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Air Purifiers",
              image:
                "/catagory/TV&HomeAppliances/(4)Cooling&Heating/AirPurifiers.jpg",
            },
            {
              id: 2,
              tittle: "Heaters",
              image:
                "/catagory/TV&HomeAppliances/(4)Cooling&Heating/Heaters.jpg",
            },
            {
              id: 3,
              tittle: "Humidifiers",
              image:
                "/catagory/TV&HomeAppliances/(4)Cooling&Heating/Humidifiers.jpg",
            },
            {
              id: 4,
              tittle: "Water Heaters",
              image:
                "/catagory/TV&HomeAppliances/(4)Cooling&Heating/WaterHeaters.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Kitchen Appliances",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Cooktops & Ranges",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/Cooktops&Ranges.jpg",
            },
            {
              id: 2,
              tittle: "Deep Freezer",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/DeepFreezer.jpg",
            },
            {
              id: 3,
              tittle: "Electra Deep Freezer",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/ElectraDeepFreezer.jpg",
            },
            {
              id: 4,
              tittle: "Gas Stoves",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/GasStoves.jpg",
            },
            {
              id: 5,
              tittle: "Haier Deep Freezer",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/HaierDeepFreezer.jpg",
            },
            {
              id: 6,
              tittle: "Marcel Deep Freezer",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/MarcelDeepFreezer.jpg",
            },
            {
              id: 7,
              tittle: "Minister Deep Freezer",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/MinisterDeepFreezer.jpg",
            },
            {
              id: 8,
              tittle: "Ovens",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/Ovens.jpg",
            },
            {
              id: 9,
              tittle: "Range Hoods",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/RangeHoods.jpg",
            },
            {
              id: 10,
              tittle: "Sharp Deep Freezer",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/SharpDeepFreezer.jpg",
            },
            {
              id: 11,
              tittle: "Singer Deep Freezer",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/SingerDeepFreezer.jpg",
            },
            {
              id: 12,
              tittle: "Walton Deep Freezer",
              image:
                "/catagory/TV&HomeAppliances/(5)KitchenAppliances/WaltonDeepFreezer.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Refrigerators",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Haier",
              image: "/catagory/TV&HomeAppliances/(6)Refrigerators/Haier.jpg",
            },
            {
              id: 2,
              tittle: "Minister",
              image:
                "/catagory/TV&HomeAppliances/(6)Refrigerators/Minister.jpg",
            },
            {
              id: 3,
              tittle: "Myone",
              image: "/catagory/TV&HomeAppliances/(6)Refrigerators/Myone.jpg",
            },
            {
              id: 4,
              tittle: "Samsung",
              image: "/catagory/TV&HomeAppliances/(6)Refrigerators/Samsung.jpg",
            },
            {
              id: 5,
              tittle: "Sharp",
              image: "/catagory/TV&HomeAppliances/(6)Refrigerators/Sharp.jpg",
            },
            {
              id: 6,
              tittle: "Singer",
              image: "/catagory/TV&HomeAppliances/(6)Refrigerators/Singer.jpg",
            },
            {
              id: 7,
              tittle: "Walton",
              image: "/catagory/TV&HomeAppliances/(6)Refrigerators/Walton.jpg",
            },
            {
              id: 8,
              tittle: "Whirlpool",
              image:
                "/catagory/TV&HomeAppliances/(6)Refrigerators/Whirlpool.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Washing Machines",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Haier",
              image: "/catagory/TV&HomeAppliances/(7)WashingMachines/Haier.jpg",
            },
            {
              id: 2,
              tittle: "LG",
              image: "/catagory/TV&HomeAppliances/(7)WashingMachines/LG.jpg",
            },
            {
              id: 3,
              tittle: "Samsung",
              image:
                "/catagory/TV&HomeAppliances/(7)WashingMachines/Samsung.jpg",
            },
            {
              id: 4,
              tittle: "Sharp",
              image: "/catagory/TV&HomeAppliances/(7)WashingMachines/Sharp.jpg",
            },
            {
              id: 5,
              tittle: "Singer",
              image:
                "/catagory/TV&HomeAppliances/(7)WashingMachines/Singer.jpg",
            },
            {
              id: 6,
              tittle: "Vision",
              image:
                "/catagory/TV&HomeAppliances/(7)WashingMachines/Vision.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Microwaves",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Panasonic",
              image: "/catagory/TV&HomeAppliances/(8)Microwaves/Panasonic.jpg",
            },
            {
              id: 2,
              tittle: "Samsung",
              image: "/catagory/TV&HomeAppliances/(8)Microwaves/Samsung.jpg",
            },
            {
              id: 3,
              tittle: "Sharp",
              image: "/catagory/TV&HomeAppliances/(8)Microwaves/Sharp.jpg",
            },
            {
              id: 4,
              tittle: "Singer",
              image: "/catagory/TV&HomeAppliances/(8)Microwaves/Singer.jpg",
            },
          ],
        },
        {
          id: 9,
          tittle: "Air Conditioners",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Walton AC",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/WaltonAC.jpg",
            },
            {
              id: 2,
              tittle: "Vision Cooler",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/VisionCooler.jpg",
            },
            {
              id: 3,
              tittle: "ViomiAC",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/ViomiAC.jpg",
            },
            {
              id: 4,
              tittle: "Gree AC",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/GreeAC.jpg",
            },
            {
              id: 5,
              tittle: "Haier AC",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/HaierAC.jpg",
            },
            {
              id: 6,
              tittle: "MideaAC",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/MideaAC.jpg",
            },
            {
              id: 7,
              tittle: "Walton Cooler",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/WaltonCooler.jpg",
            },
            {
              id: 8,
              tittle: "Minister AC",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/MinisterAC.jpg",
            },
            {
              id: 9,
              tittle: "Orient Cooler",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/OrientCooler.jpg",
            },
            {
              id: 10,
              tittle: "Singer AC",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/SingerAC.jpg",
            },
            {
              id: 11,
              tittle: "Gree Cooler",
              image:
                "/catagory/TV&HomeAppliances/(9)AirConditioners/GreeCooler.jpg",
            },
          ],
        },
        {
          id: 10,
          tittle: "Fans",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Ceiling Fans",
              image: "/catagory/TV&HomeAppliances/(10)Fans/CeilingFans.jpg",
            },
            {
              id: 2,
              tittle: "Mini Fans",
              image: "/catagory/TV&HomeAppliances/(10)Fans/MiniFans.jpg",
            },
            {
              id: 3,
              tittle: "Other Fans",
              image: "/catagory/TV&HomeAppliances/(10)Fans/OtherFans.jpg",
            },
            {
              id: 4,
              tittle: "Stand Fan",
              image: "/catagory/TV&HomeAppliances/(10)Fans/StandFan.jpg",
            },
            {
              id: 5,
              tittle: "Table Fans",
              image: "/catagory/TV&HomeAppliances/(10)Fans/TableFans.jpg",
            },
          ],
        },
        {
          id: 11,
          tittle: "Small Appliances",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Blender",
              image:
                "/catagory/TV&HomeAppliances/(11)SmallAppliances/Blender.jpg",
            },
            {
              id: 2,
              tittle: "Coffee Machines",
              image:
                "/catagory/TV&HomeAppliances/(11)SmallAppliances/CoffeeMachines.jpg",
            },
            {
              id: 3,
              tittle: "Electric Kettles",
              image:
                "/catagory/TV&HomeAppliances/(11)SmallAppliances/ElectricKettles.jpg",
            },
            {
              id: 4,
              tittle: "Fryers",
              image:
                "/catagory/TV&HomeAppliances/(11)SmallAppliances/Fryers.jpg",
            },
            {
              id: 5,
              tittle: "Irons",
              image:
                "/catagory/TV&HomeAppliances/(11)SmallAppliances/Irons.jpg",
            },
            {
              id: 6,
              tittle: "Other Small Kitchen Appliances",
              image:
                "/catagory/TV&HomeAppliances/(11)SmallAppliances/OtherSmallKitchenAppliances.jpg",
            },
            {
              id: 7,
              tittle: "Rice Cookers",
              image:
                "/catagory/TV&HomeAppliances/(11)SmallAppliances/RiceCookers.jpg",
            },
            {
              id: 8,
              tittle: "Sewing Machines",
              image:
                "/catagory/TV&HomeAppliances/(11)SmallAppliances/SewingMachines.jpg",
            },
            {
              id: 9,
              tittle: "Toasters",
              image:
                "/catagory/TV&HomeAppliances/(11)SmallAppliances/Toasters.jpg",
            },
            {
              id: 10,
              tittle: "Vacuum Cleaners",
              image:
                "/catagory/TV&HomeAppliances/(11)SmallAppliances/VacuumCleaners.jpg",
            },
          ],
        },
        {
          id: 12,
          tittle: "Water Purifiers",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Havells",
              image:
                "/catagory/TV&HomeAppliances/(12)WaterPurifiers/Havells.jpg",
            },
            {
              id: 2,
              tittle: "Kent",
              image: "/catagory/TV&HomeAppliances/(12)WaterPurifiers/Kent.jpg",
            },
            {
              id: 3,
              tittle: "Midea",
              image: "/catagory/TV&HomeAppliances/(12)WaterPurifiers/Midea.jpg",
            },
            {
              id: 4,
              tittle: "Pureit",
              image:
                "/catagory/TV&HomeAppliances/(12)WaterPurifiers/Pureit.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      tittle: "Electronic Accessories",
      icon: <LuCable />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Audio",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bluetooth Speaker",
              image:
                "/catagory/ElectronicAccessories/(1)Audio/BluetoothSpeaker.jpg",
            },
            {
              id: 2,
              tittle: "Headphones & Headsets",
              image:
                "/catagory/ElectronicAccessories/(1)Audio/Headphones&Headsets.jpg",
            },
            {
              id: 3,
              tittle: "Live Sound & Stage Equipment",
              image:
                "/catagory/ElectronicAccessories/(1)Audio/LiveSound&StageEquipment.jpg",
            },
            {
              id: 4,
              tittle: "Portable Players",
              image:
                "/catagory/ElectronicAccessories/(1)Audio/PortablePlayers.jpg",
            },
            {
              id: 5,
              tittle: "Smart Speaker",
              image:
                "/catagory/ElectronicAccessories/(1)Audio/SmartSpeaker.jpg",
            },
            {
              id: 6,
              tittle: "Wireless Earbuds",
              image:
                "/catagory/ElectronicAccessories/(1)Audio/WirelessEarbuds.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Wearable",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Fitness & Activity Trackers",
              image:
                "/catagory/ElectronicAccessories/(2)Wearable/Fitness&ActivityTrackers.jpg",
            },
            {
              id: 2,
              tittle: "Smartwatches",
              image:
                "/catagory/ElectronicAccessories/(2)Wearable/Smartwatches.jpg",
            },
            {
              id: 3,
              tittle: "Smartwatches Accessories",
              image:
                "/catagory/ElectronicAccessories/(2)Wearable/SmartwatchesAccessories.jpg",
            },
            {
              id: 4,
              tittle: "Virtual Reality",
              image:
                "/catagory/ElectronicAccessories/(2)Wearable/VirtualReality.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Gadgets",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Laser Pointers",
              image:
                "/catagory/ElectronicAccessories/(3)Gadgets/LaserPointers.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Computer Accessories",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Keyboards",
              image:
                "/catagory/ElectronicAccessories/(4)ComputerAccessories/Keyboards.jpg",
            },
            {
              id: 2,
              tittle: "Mice & Keyboard Combos",
              image:
                "/catagory/ElectronicAccessories/(4)ComputerAccessories/Mice&KeyboardCombos.jpg",
            },
            {
              id: 3,
              tittle: "Mice",
              image:
                "/catagory/ElectronicAccessories/(4)ComputerAccessories/Mice.jpg",
            },
            {
              id: 4,
              tittle: "Monitors",
              image:
                "/catagory/ElectronicAccessories/(4)ComputerAccessories/Monitors.jpg",
            },
            {
              id: 5,
              tittle: "PC Audio",
              image:
                "/catagory/ElectronicAccessories/(4)ComputerAccessories/PCAudio.jpg",
            },
            {
              id: 6,
              tittle: "Power Cord & Adaptors",
              image:
                "/catagory/ElectronicAccessories/(4)ComputerAccessories/PowerCord&Adaptors.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Storage",
          nastedCatagory: [
            {
              id: 1,
              tittle: "External Hard Drives",
              image:
                "/catagory/ElectronicAccessories/(5)Storage/ExternalHardDrives.jpg",
            },
            {
              id: 2,
              tittle: "External Solid State Drives",
              image:
                "/catagory/ElectronicAccessories/(5)Storage/ExternalSolidStateDrives.jpg",
            },
            {
              id: 3,
              tittle: "Flash Drives",
              image:
                "/catagory/ElectronicAccessories/(5)Storage/FlashDrives.jpg",
            },
            {
              id: 4,
              tittle: "Internal Hard Drives",
              image:
                "/catagory/ElectronicAccessories/(5)Storage/InternalHardDrives.jpg",
            },
            {
              id: 5,
              tittle: "Internal Solid State Drives",
              image:
                "/catagory/ElectronicAccessories/(5)Storage/InternalSolidStateDrives.jpg",
            },
            {
              id: 6,
              tittle: "OTG Drives",
              image: "/catagory/ElectronicAccessories/(5)Storage/OTGDrives.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Printer",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Fax Machines",
              image:
                "/catagory/ElectronicAccessories/(6)Printer/FaxMachines.jpg",
            },
            {
              id: 2,
              tittle: "Ink",
              image: "/catagory/ElectronicAccessories/(6)Printer/Ink.jpg",
            },
            {
              id: 3,
              tittle: "Printers",
              image: "/catagory/ElectronicAccessories/(6)Printer/Printers.jpg",
            },
            {
              id: 4,
              tittle: "Printer Stands",
              image:
                "/catagory/ElectronicAccessories/(6)Printer/PrinterStands.jpg",
            },
            {
              id: 5,
              tittle: "Toner",
              image: "/catagory/ElectronicAccessories/(6)Printer/Toner.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Computer Components",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Desktop Casings",
              image:
                "/catagory/ElectronicAccessories/(7)ComputerComponents/DesktopCasings.jpg",
            },
            {
              id: 2,
              tittle: "Fans & Heatsinks",
              image:
                "/catagory/ElectronicAccessories/(7)ComputerComponents/Fans&Heatsinks.jpg",
            },
            {
              id: 3,
              tittle: "Graphic Cards",
              image:
                "/catagory/ElectronicAccessories/(7)ComputerComponents/GraphicCards.jpg",
            },
            {
              id: 4,
              tittle: "Motherboards",
              image:
                "/catagory/ElectronicAccessories/(7)ComputerComponents/Motherboards.jpg",
            },
            {
              id: 5,
              tittle: "Processors",
              image:
                "/catagory/ElectronicAccessories/(7)ComputerComponents/Processors.jpg",
            },
            {
              id: 6,
              tittle: "RAM",
              image:
                "/catagory/ElectronicAccessories/(7)ComputerComponents/RAM.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Network Components",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Access Points",
              image:
                "/catagory/ElectronicAccessories/(8)NetworkComponents/AccessPoints.jpg",
            },
            {
              id: 2,
              tittle: "Modems",
              image:
                "/catagory/ElectronicAccessories/(8)NetworkComponents/Modems.jpg",
            },
            {
              id: 3,
              tittle: "Network Interface Cards",
              image:
                "/catagory/ElectronicAccessories/(8)NetworkComponents/NetworkInterfaceCards.jpg",
            },
            {
              id: 4,
              tittle: "Network Switches",
              image:
                "/catagory/ElectronicAccessories/(8)NetworkComponents/NetworkSwitches.jpg",
            },
            {
              id: 5,
              tittle: "Routers",
              image:
                "/catagory/ElectronicAccessories/(8)NetworkComponents/Routers.jpg",
            },
            {
              id: 6,
              tittle: "Wireless USB Adapters",
              image:
                "/catagory/ElectronicAccessories/(8)NetworkComponents/WirelessUSBAdapters.jpg",
            },
          ],
        },
        {
          id: 9,
          tittle: "Software",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Educational Media",
              image:
                "/catagory/ElectronicAccessories/(9)Software/EducationalMedia.jpg",
            },
            {
              id: 2,
              tittle: "Operating System",
              image:
                "/catagory/ElectronicAccessories/(9)Software/OperatingSystem.jpg",
            },
            {
              id: 3,
              tittle: "PC Games",
              image: "/catagory/ElectronicAccessories/(9)Software/PCGames.jpg",
            },
            {
              id: 4,
              tittle: "Security Software",
              image:
                "/catagory/ElectronicAccessories/(9)Software/SecuritySoftware.jpg",
            },
          ],
        },
        {
          id: 10,
          tittle: "Camera Accessories",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Batteries",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/Batteries.jpg",
            },
            {
              id: 2,
              tittle: "Canon",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/Canon.jpg",
            },
            {
              id: 3,
              tittle: "Gimbals & Stabilizers",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/Gimbals&Stabilizers.jpg",
            },
            {
              id: 4,
              tittle: "Lighting & Studio Equipment",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/Lighting&StudioEquipment.jpg",
            },
            {
              id: 5,
              tittle: "Memory Cards",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/MemoryCards.jpg",
            },
            {
              id: 6,
              tittle: "Nikon",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/Nikon.jpg",
            },
            {
              id: 7,
              tittle: "Sony",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/Sony.jpg",
            },
            {
              id: 8,
              tittle: "Sports & Action Camera Accessories",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/Sports&ActionCameraAccessories.jpg",
            },
            {
              id: 9,
              tittle: "Tripods & Monopods",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/Tripods&Monopods.jpg",
            },
            {
              id: 10,
              tittle: "Ulanzi",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/Ulanzi.jpg",
            },
            {
              id: 11,
              tittle: "Yunteng",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/Yunteng.jpg",
            },
            {
              id: 12,
              tittle: "ZHIYUN",
              image:
                "/catagory/ElectronicAccessories/(10)CameraAccessories/ZHIYUN.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 9,
      tittle: "Groceries",
      icon: <FaShoppingBasket />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Fruits, Meat & Frozen",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Canned Vegetables",
              image:
                "/catagory/Groceries/(1)FruitsMeat&Frozen/CannedVegetables.jpg",
            },
            {
              id: 2,
              tittle: "Dates",
              image: "/catagory/Groceries/(1)FruitsMeat&Frozen/Dates.jpg",
            },
            {
              id: 3,
              tittle: "Dried Fish",
              image: "/catagory/Groceries/(1)FruitsMeat&Frozen/DriedFish.jpg",
            },
            {
              id: 4,
              tittle: "Fruits",
              image: "/catagory/Groceries/(1)FruitsMeat&Frozen/Fruits.jpg",
            },
            {
              id: 5,
              tittle: "Vegetables",
              image: "/catagory/Groceries/(1)FruitsMeat&Frozen/Vegetables.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Breakfast",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Artificial Sweetners",
              image: "/catagory/Groceries/(2)Breakfast/ArtificialSweetners.jpg",
            },
            {
              id: 2,
              tittle: "Bread",
              image: "/catagory/Groceries/(2)Breakfast/Bread.jpg",
            },
            {
              id: 3,
              tittle: "Breakfast Cereals",
              image: "/catagory/Groceries/(2)Breakfast/BreakfastCereals.jpg",
            },
            {
              id: 4,
              tittle: "Granola",
              image: "/catagory/Groceries/(2)Breakfast/Granola.jpg",
            },
            {
              id: 5,
              tittle: "Honey",
              image: "/catagory/Groceries/(2)Breakfast/Honey.jpg",
            },
            {
              id: 6,
              tittle: "Jam & Jellys",
              image: "/catagory/Groceries/(2)Breakfast/Jam&Jellys.jpg",
            },
            {
              id: 7,
              tittle: "Nut Butter",
              image: "/catagory/Groceries/(2)Breakfast/NutButter.jpg",
            },
            {
              id: 8,
              tittle: "Oatmeals",
              image: "/catagory/Groceries/(2)Breakfast/Oatmeals.jpg",
            },
            {
              id: 9,
              tittle: "Spreads",
              image: "/catagory/Groceries/(2)Breakfast/Spreads.jpg",
            },
            {
              id: 10,
              tittle: "Syrup",
              image: "/catagory/Groceries/(2)Breakfast/Syrup.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Cooking Ingredients",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Baking Ingredients",
              image:
                "/catagory/Groceries/(3)CookingIngredients/BakingIngredients.jpg",
            },
            {
              id: 2,
              tittle: "Flour",
              image: "/catagory/Groceries/(3)CookingIngredients/Flour.jpg",
            },
            {
              id: 3,
              tittle: "Ghee",
              image: "/catagory/Groceries/(3)CookingIngredients/Ghee.jpg",
            },
            {
              id: 4,
              tittle: "Lentils",
              image: "/catagory/Groceries/(3)CookingIngredients/Lentils.jpg",
            },
            {
              id: 5,
              tittle: "Mashrooms",
              image: "/catagory/Groceries/(3)CookingIngredients/Mashrooms.jpg",
            },
            {
              id: 6,
              tittle: "Nuts",
              image: "/catagory/Groceries/(3)CookingIngredients/Nuts.jpg",
            },
            {
              id: 7,
              tittle: "Oil",
              image: "/catagory/Groceries/(3)CookingIngredients/Oil.jpg",
            },
            {
              id: 8,
              tittle: "Rice",
              image: "/catagory/Groceries/(3)CookingIngredients/Rice.jpg",
            },
            {
              id: 9,
              tittle: "Salt",
              image: "/catagory/Groceries/(3)CookingIngredients/Salt.jpg",
            },
            {
              id: 10,
              tittle: "Shemai & Suji",
              image:
                "/catagory/Groceries/(3)CookingIngredients/Shemai&Suji.jpg",
            },
            {
              id: 11,
              tittle: "Sugar",
              image: "/catagory/Groceries/(3)CookingIngredients/Sugar.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Snacks & Beverages",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Biscuit",
              image: "/catagory/Groceries/(4)Snacks&Beverages/Biscuit.jpg",
            },
            {
              id: 2,
              tittle: "Cakes",
              image: "/catagory/Groceries/(4)Snacks&Beverages/Cakes.jpg",
            },
            {
              id: 3,
              tittle: "Carbonated Bevarages",
              image:
                "/catagory/Groceries/(4)Snacks&Beverages/CarbonatedBevarages.jpg",
            },
            {
              id: 4,
              tittle: "Chips",
              image: "/catagory/Groceries/(4)Snacks&Beverages/Chips.jpg",
            },
            {
              id: 5,
              tittle: "Coffee",
              image: "/catagory/Groceries/(4)Snacks&Beverages/Coffee.jpg",
            },
            {
              id: 6,
              tittle: "Dry Fruits",
              image: "/catagory/Groceries/(4)Snacks&Beverages/DryFruits.jpg",
            },
            {
              id: 7,
              tittle: "Instant Soup",
              image: "/catagory/Groceries/(4)Snacks&Beverages/InstantSoup.jpg",
            },
            {
              id: 8,
              tittle: "Juice Drinks and Concentrates",
              image:
                "/catagory/Groceries/(4)Snacks&Beverages/JuiceDrinksandConcentrates.jpg",
            },
            {
              id: 9,
              tittle: "Mixed Nuts",
              image: "/catagory/Groceries/(4)Snacks&Beverages/MixedNuts.jpg",
            },
            {
              id: 10,
              tittle: "Noodles",
              image: "/catagory/Groceries/(4)Snacks&Beverages/Noodles.jpg",
            },
            {
              id: 11,
              tittle: "Powdered drink mixes",
              image:
                "/catagory/Groceries/(4)Snacks&Beverages/Powdereddrinkmixes.jpg",
            },
            {
              id: 12,
              tittle: "Tea",
              image: "/catagory/Groceries/(4)Snacks&Beverages/Tea.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Dairy & Eggs",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Condensed Milk",
              image: "/catagory/Groceries/(5)Dairy&Eggs/CondensedMilk.jpg",
            },
            {
              id: 2,
              tittle: "Creame",
              image: "/catagory/Groceries/(5)Dairy&Eggs/Creame.jpg",
            },
            {
              id: 3,
              tittle: "Milk Powder",
              image: "/catagory/Groceries/(5)Dairy&Eggs/MilkPowder.jpg",
            },
            {
              id: 4,
              tittle: "UHT Milk",
              image: "/catagory/Groceries/(5)Dairy&Eggs/UHTMilk.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Herbs, Spices & Sauces",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Cooking Sauce",
              image:
                "/catagory/Groceries/(6)HerbsSpices&Sauces/CookingSauce.jpg",
            },
            {
              id: 2,
              tittle: "Flavoring Syrups",
              image:
                "/catagory/Groceries/(6)HerbsSpices&Sauces/FlavoringSyrups.jpg",
            },
            {
              id: 3,
              tittle: "Food Color",
              image: "/catagory/Groceries/(6)HerbsSpices&Sauces/FoodColor.jpg",
            },
            {
              id: 4,
              tittle: "Herbs",
              image: "/catagory/Groceries/(6)HerbsSpices&Sauces/Herbs.jpg",
            },
            {
              id: 5,
              tittle: "Mayonnaise & Salad Dressings",
              image:
                "/catagory/Groceries/(6)HerbsSpices&Sauces/Mayonnaise&SaladDressings.jpg",
            },
            {
              id: 6,
              tittle: "Mustard",
              image: "/catagory/Groceries/(6)HerbsSpices&Sauces/Mustard.jpg",
            },
            {
              id: 7,
              tittle: "Pickles",
              image: "/catagory/Groceries/(6)HerbsSpices&Sauces/Pickles.jpg",
            },
            {
              id: 8,
              tittle: "Ready Mix",
              image: "/catagory/Groceries/(6)HerbsSpices&Sauces/ReadyMix.jpg",
            },
            {
              id: 9,
              tittle: "Sauces & Ketchup",
              image:
                "/catagory/Groceries/(6)HerbsSpices&Sauces/Sauces&Ketchup.jpg",
            },
            {
              id: 10,
              tittle: "Seasoning",
              image: "/catagory/Groceries/(6)HerbsSpices&Sauces/Seasoning.jpg",
            },
            {
              id: 11,
              tittle: "Spices",
              image: "/catagory/Groceries/(6)HerbsSpices&Sauces/Spices.jpg",
            },
            {
              id: 12,
              tittle: "Vineger & Soysauce",
              image:
                "/catagory/Groceries/(6)HerbsSpices&Sauces/Vineger&Soysauce.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Chocolates & Candy",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Cadbury",
              image: "/catagory/Groceries/(7)Chocolates&Candy/Cadbury.jpg",
            },
            {
              id: 2,
              tittle: "Candy",
              image: "/catagory/Groceries/(7)Chocolates&Candy/Candy.jpg",
            },
            {
              id: 3,
              tittle: "Caramels & Toffee",
              image:
                "/catagory/Groceries/(7)Chocolates&Candy/Caramels&Toffee.jpg",
            },
            {
              id: 4,
              tittle: "Chewing Gum & Mints",
              image:
                "/catagory/Groceries/(7)Chocolates&Candy/ChewingGum&Mints.jpg",
            },
            {
              id: 5,
              tittle: "Chocolate",
              image: "/catagory/Groceries/(7)Chocolates&Candy/Chocolate.jpg",
            },
            {
              id: 6,
              tittle: "Ferrero Rocher",
              image:
                "/catagory/Groceries/(7)Chocolates&Candy/FerreroRocher.jpg",
            },
            {
              id: 7,
              tittle: "Festive Boxes",
              image: "/catagory/Groceries/(7)Chocolates&Candy/FestiveBoxes.jpg",
            },
            {
              id: 8,
              tittle: "Hersheys",
              image: "/catagory/Groceries/(7)Chocolates&Candy/Hersheys.jpg",
            },
            {
              id: 9,
              tittle: "Kinder",
              image: "/catagory/Groceries/(7)Chocolates&Candy/Kinder.jpg",
            },
            {
              id: 10,
              tittle: "Kitkat",
              image: "/catagory/Groceries/(7)Chocolates&Candy/Kitkat.jpg",
            },
            {
              id: 11,
              tittle: "Marshamallows",
              image:
                "/catagory/Groceries/(7)Chocolates&Candy/Marshamallows.jpg",
            },
            {
              id: 12,
              tittle: "Snickers",
              image: "/catagory/Groceries/(7)Chocolates&Candy/Snickers.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Laundry & Household",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Air Fresheners",
              image:
                "/catagory/Groceries/(8)Laundry&Household/AirFresheners.jpg",
            },
            {
              id: 2,
              tittle: "Bathroom",
              image: "/catagory/Groceries/(8)Laundry&Household/Bathroom.jpg",
            },
            {
              id: 3,
              tittle: "Dishwashing",
              image: "/catagory/Groceries/(8)Laundry&Household/Dishwashing.jpg",
            },
            {
              id: 4,
              tittle: "Floors",
              image: "/catagory/Groceries/(8)Laundry&Household/Floors.jpg",
            },
            {
              id: 5,
              tittle: "Glass Cleaner",
              image:
                "/catagory/Groceries/(8)Laundry&Household/GlassCleaner.jpg",
            },
            {
              id: 6,
              tittle: "Pest Control",
              image: "/catagory/Groceries/(8)Laundry&Household/PestControl.jpg",
            },
            {
              id: 7,
              tittle: "Speciality Items",
              image:
                "/catagory/Groceries/(8)Laundry&Household/SpecialityItems.jpg",
            },
            {
              id: 8,
              tittle: "Tissues",
              image: "/catagory/Groceries/(8)Laundry&Household/Tissues.jpg",
            },
            {
              id: 9,
              tittle: "Washing Liquid",
              image:
                "/catagory/Groceries/(8)Laundry&Household/WashingLiquid.jpg",
            },
            {
              id: 10,
              tittle: "Washing Powder",
              image:
                "/catagory/Groceries/(8)Laundry&Household/WashingPowder.jpg",
            },
          ],
        },
        {
          id: 9,
          tittle: "Vape and Accessories",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Air Fresheners",
              image:
                "/catagory/Groceries/(8)Laundry&Household/AirFresheners.jpg",
            },
            {
              id: 2,
              tittle: "Bathroom",
              image: "/catagory/Groceries/(8)Laundry&Household/Bathroom.jpg",
            },
            {
              id: 3,
              tittle: "Dishwashing",
              image: "/catagory/Groceries/(8)Laundry&Household/Dishwashing.jpg",
            },
            {
              id: 4,
              tittle: "Floors",
              image: "/catagory/Groceries/(8)Laundry&Household/Floors.jpg",
            },
            {
              id: 5,
              tittle: "Glass Cleaner",
              image:
                "/catagory/Groceries/(8)Laundry&Household/GlassCleaner.jpg",
            },
            {
              id: 6,
              tittle: "Pest Control",
              image: "/catagory/Groceries/(8)Laundry&Household/PestControl.jpg",
            },
            {
              id: 7,
              tittle: "Speciality Items",
              image:
                "/catagory/Groceries/(8)Laundry&Household/SpecialityItems.jpg",
            },
            {
              id: 8,
              tittle: "Tissues",
              image: "/catagory/Groceries/(8)Laundry&Household/Tissues.jpg",
            },
            {
              id: 9,
              tittle: "Washing Liquid",
              image:
                "/catagory/Groceries/(8)Laundry&Household/WashingLiquid.jpg",
            },
            {
              id: 10,
              tittle: "Washing Powder",
              image:
                "/catagory/Groceries/(8)Laundry&Household/WashingPowder.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 10,
      tittle: "Home & Lifestyle",
      icon: <GiLipstick />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Bath",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bath Mats",
              image: "/catagory/Home&Lifestyle/(1)Bath/BathMats.jpg",
            },
            {
              id: 2,
              tittle: "Bathrobes",
              image: "/catagory/Home&Lifestyle/(1)Bath/Bathrobes.jpg",
            },
            {
              id: 3,
              tittle: "Bathroom Counter Storage",
              image:
                "/catagory/Home&Lifestyle/(1)Bath/BathroomCounterStorage.jpg",
            },
            {
              id: 4,
              tittle: "Bathroom Mirrors",
              image: "/catagory/Home&Lifestyle/(1)Bath/BathroomMirrors.jpg",
            },
            {
              id: 5,
              tittle: "Bathroom Shelving",
              image: "/catagory/Home&Lifestyle/(1)Bath/BathroomShelving.jpg",
            },
            {
              id: 6,
              tittle: "Bath Towels",
              image: "/catagory/Home&Lifestyle/(1)Bath/BathTowels.jpg",
            },
            {
              id: 7,
              tittle: "Shower Caddies & Hangers",
              image:
                "/catagory/Home&Lifestyle/(1)Bath/ShowerCaddies&Hangers.jpg",
            },
            {
              id: 8,
              tittle: "Shower Curtains",
              image: "/catagory/Home&Lifestyle/(1)Bath/ShowerCurtains.jpg",
            },
            {
              id: 9,
              tittle: "Toilet Brushes",
              image: "/catagory/Home&Lifestyle/(1)Bath/ToiletBrushes.jpg",
            },
            {
              id: 10,
              tittle: "Toilet Covers",
              image: "/catagory/Home&Lifestyle/(1)Bath/ToiletCovers.jpg",
            },
            {
              id: 11,
              tittle: "Toilet Roll Holders",
              image: "/catagory/Home&Lifestyle/(1)Bath/ToiletRollHolders.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Bedding",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bedding Accessories",
              image:
                "/catagory/Home&Lifestyle/(2)Bedding/BeddingAccessories.jpg",
            },
            {
              id: 2,
              tittle: "Bedding Sets",
              image: "/catagory/Home&Lifestyle/(2)Bedding/BeddingSets.jpg",
            },
            {
              id: 3,
              tittle: "Bed Runners & Skirts",
              image:
                "/catagory/Home&Lifestyle/(2)Bedding/BedRunners&Skirts.jpg",
            },
            {
              id: 4,
              tittle: "Bed Sheets",
              image: "/catagory/Home&Lifestyle/(2)Bedding/BedSheets.jpg",
            },
            {
              id: 5,
              tittle: "Blankets & Throws",
              image: "/catagory/Home&Lifestyle/(2)Bedding/Blankets&Throws.jpg",
            },
            {
              id: 6,
              tittle: "Comforters, Quilts & Duvets",
              image:
                "/catagory/Home&Lifestyle/(2)Bedding/Comforters,Quilts&Duvets.jpg",
            },
            {
              id: 7,
              tittle: "Electric Blankets",
              image: "/catagory/Home&Lifestyle/(2)Bedding/ElectricBlankets.jpg",
            },
            {
              id: 8,
              tittle: "Mattress Pads",
              image: "/catagory/Home&Lifestyle/(2)Bedding/MattressPads.jpg",
            },
            {
              id: 9,
              tittle: "Mattress Protectors",
              image:
                "/catagory/Home&Lifestyle/(2)Bedding/MattressProtectors.jpg",
            },
            {
              id: 10,
              tittle: "Pillow Cases",
              image: "/catagory/Home&Lifestyle/(2)Bedding/PillowCases.jpg",
            },
            {
              id: 11,
              tittle: "Pillow Protectors",
              image: "/catagory/Home&Lifestyle/(2)Bedding/PillowProtectors.jpg",
            },
            {
              id: 12,
              tittle: "Towel Rails & Warmers",
              image:
                "/catagory/Home&Lifestyle/(2)Bedding/TowelRails&Warmers.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Furniture",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bedroom Furniture",
              image:
                "/catagory/Home&Lifestyle/(3)Furniture/BedroomFurniture.jpg",
            },
            {
              id: 2,
              tittle: "Home Office Furniture",
              image:
                "/catagory/Home&Lifestyle/(3)Furniture/HomeOfficeFurniture.jpg",
            },
            {
              id: 3,
              tittle: "Kids Furniture",
              image: "/catagory/Home&Lifestyle/(3)Furniture/KidsFurniture.jpg",
            },
            {
              id: 4,
              tittle: "Kitchen & Dining Furniture",
              image:
                "/catagory/Home&Lifestyle/(3)Furniture/Kitchen&DiningFurniture.jpg",
            },
            {
              id: 5,
              tittle: "Living Room Furniture",
              image:
                "/catagory/Home&Lifestyle/(3)Furniture/LivingRoomFurniture.jpg",
            },
            {
              id: 6,
              tittle: "Outdoor Furniture",
              image:
                "/catagory/Home&Lifestyle/(3)Furniture/OutdoorFurniture.jpg",
            },
            {
              id: 7,
              tittle: "Storage & Organisation",
              image:
                "/catagory/Home&Lifestyle/(3)Furniture/Storage&Organisation.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Cleaning",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Brooms, Mops & Sweepers",
              image:
                "/catagory/Home&Lifestyle/(4)Cleaning/Brooms,Mops&Sweepers.jpg",
            },
            {
              id: 2,
              tittle: "Brushes, Sponges & Wipers",
              image:
                "/catagory/Home&Lifestyle/(4)Cleaning/Brushes,Sponges&Wipers.jpg",
            },
            {
              id: 3,
              tittle: "Cleaning Buckets & Tubs",
              image:
                "/catagory/Home&Lifestyle/(4)Cleaning/CleaningBuckets&Tubs.jpg",
            },
            {
              id: 4,
              tittle: "Cleaning Gloves",
              image: "/catagory/Home&Lifestyle/(4)Cleaning/CleaningGloves.jpg",
            },
            {
              id: 5,
              tittle: "Cleaning Products",
              image:
                "/catagory/Home&Lifestyle/(4)Cleaning/CleaningProducts.jpg",
            },
            {
              id: 6,
              tittle: "Dusters & Dust Cloths",
              image:
                "/catagory/Home&Lifestyle/(4)Cleaning/Dusters&DustCloths.jpg",
            },
            {
              id: 7,
              tittle: "Garbage & Recycling Bins",
              image:
                "/catagory/Home&Lifestyle/(4)Cleaning/Garbage&RecyclingBins.jpg",
            },
            {
              id: 8,
              tittle: "Trash Bags & Liners",
              image:
                "/catagory/Home&Lifestyle/(4)Cleaning/TrashBags&Liners.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Laundry",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Clothes Hangers & Pegs",
              image:
                "/catagory/Home&Lifestyle/(5)Laundry/ClothesHangers&Pegs.jpg",
            },
            {
              id: 2,
              tittle: "Clothes Line & Drying Racks",
              image:
                "/catagory/Home&Lifestyle/(5)Laundry/ClothesLine&DryingRacks.jpg",
            },
            {
              id: 3,
              tittle: "Ironing Boards",
              image: "/catagory/Home&Lifestyle/(5)Laundry/IroningBoards.jpg",
            },
            {
              id: 4,
              tittle: "Laundry & Ironing Tools",
              image:
                "/catagory/Home&Lifestyle/(5)Laundry/Laundry&IroningTools.jpg",
            },
            {
              id: 5,
              tittle: "Laundry Bags & Wash Balls",
              image:
                "/catagory/Home&Lifestyle/(5)Laundry/LaundryBags&WashBalls.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Bakeware",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bakeware Dishes",
              image: "/catagory/Home&Lifestyle/(6)Bakeware/BakewareDishes.jpg",
            },
            {
              id: 2,
              tittle: "Bakeware Sets",
              image: "/catagory/Home&Lifestyle/(6)Bakeware/BakewareSets.jpg",
            },
            {
              id: 3,
              tittle: "Baking Tools & Accessories",
              image:
                "/catagory/Home&Lifestyle/(6)Bakeware/BakingTools&Accessories.jpg",
            },
            {
              id: 4,
              tittle: "Baking Trays & Pans",
              image:
                "/catagory/Home&Lifestyle/(6)Bakeware/BakingTrays&Pans.jpg",
            },
            {
              id: 5,
              tittle: "Cake Decorating Tools",
              image:
                "/catagory/Home&Lifestyle/(6)Bakeware/CakeDecoratingTools.jpg",
            },
            {
              id: 6,
              tittle: "Wire Racks",
              image: "/catagory/Home&Lifestyle/(6)Bakeware/WireRacks.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Coffee & Tea",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Coffee, Tea & Espresso",
              image:
                "/catagory/Home&Lifestyle/(7)Coffee&Tea/Coffee,Tea&Espresso.jpg",
            },
            {
              id: 2,
              tittle: "Coffee Makers & Grinders",
              image:
                "/catagory/Home&Lifestyle/(7)Coffee&Tea/CoffeeMakers&Grinders.jpg",
            },
            {
              id: 3,
              tittle: "Coffee Making Accessories",
              image:
                "/catagory/Home&Lifestyle/(7)Coffee&Tea/CoffeeMakingAccessories.jpg",
            },
            {
              id: 4,
              tittle: "Creamer & Sugar Bowls",
              image:
                "/catagory/Home&Lifestyle/(7)Coffee&Tea/Creamer&SugarBowls.jpg",
            },
            {
              id: 5,
              tittle: "Milk Frothers",
              image: "/catagory/Home&Lifestyle/(7)Coffee&Tea/MilkFrothers.jpg",
            },
            {
              id: 6,
              tittle: "Tea Making Accessories",
              image:
                "/catagory/Home&Lifestyle/(7)Coffee&Tea/TeaMakingAccessories.jpg",
            },
            {
              id: 7,
              tittle: "Teapots & Coffee Servers",
              image:
                "/catagory/Home&Lifestyle/(7)Coffee&Tea/Teapots&CoffeeServers.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Cookware",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Casserole Pots",
              image: "/catagory/Home&Lifestyle/(8)Cookware/CasserolePots.jpg",
            },
            {
              id: 2,
              tittle: "Cookware Sets",
              image: "/catagory/Home&Lifestyle/(8)Cookware/CookwareSets.jpg",
            },
            {
              id: 3,
              tittle: "Dutch Oven & Braziers",
              image:
                "/catagory/Home&Lifestyle/(8)Cookware/DutchOven&Braziers.jpg",
            },
            {
              id: 4,
              tittle: "Griddle & Grills",
              image: "/catagory/Home&Lifestyle/(8)Cookware/Griddle&Grills.jpg",
            },
            {
              id: 5,
              tittle: "Pots & Pans",
              image: "/catagory/Home&Lifestyle/(8)Cookware/Pots&Pans.jpg",
            },
            {
              id: 6,
              tittle: "Roasting Trays",
              image: "/catagory/Home&Lifestyle/(8)Cookware/RoastingTrays.jpg",
            },
            {
              id: 7,
              tittle: "Specialty Cookware",
              image:
                "/catagory/Home&Lifestyle/(8)Cookware/SpecialtyCookware.jpg",
            },
            {
              id: 8,
              tittle: "Steamers, Stock & Pasta Pots",
              image:
                "/catagory/Home&Lifestyle/(8)Cookware/Steamers,Stock&PastaPots.jpg",
            },
            {
              id: 9,
              tittle: "Stove Kettles",
              image: "/catagory/Home&Lifestyle/(8)Cookware/StoveKettles.jpg",
            },
            {
              id: 10,
              tittle: "Stovetop Pressure Cookers",
              image:
                "/catagory/Home&Lifestyle/(8)Cookware/StovetopPressureCookers.jpg",
            },
            {
              id: 11,
              tittle: "Woks & Stir-Fry Pans",
              image:
                "/catagory/Home&Lifestyle/(8)Cookware/Woks&Stir-FryPans.jpg",
            },
          ],
        },
        {
          id: 9,
          tittle: "Tools, DIY & Outdoor",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Electrical",
              image:
                "/catagory/Home&Lifestyle/(9)Tools,DIY&Outdoor/Electrical.jpg",
            },
            {
              id: 2,
              tittle: "Fixtures & Plumbing",
              image:
                "/catagory/Home&Lifestyle/(9)Tools,DIY&Outdoor/Fixtures&Plumbing.jpg",
            },
            {
              id: 3,
              tittle: "Hand Tools",
              image:
                "/catagory/Home&Lifestyle/(9)Tools,DIY&Outdoor/HandTools.jpg",
            },
            {
              id: 4,
              tittle: "Outdoor",
              image:
                "/catagory/Home&Lifestyle/(9)Tools,DIY&Outdoor/Outdoor.jpg",
            },
            {
              id: 5,
              tittle: "Power Tools",
              image:
                "/catagory/Home&Lifestyle/(9)Tools,DIY&Outdoor/PowerTools.jpg",
            },
            {
              id: 6,
              tittle: "Security",
              image:
                "/catagory/Home&Lifestyle/(9)Tools,DIY&Outdoor/Security.jpg",
            },
          ],
        },
        {
          id: 10,
          tittle: "Stationery & Craft",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Artworks",
              image:
                "/catagory/Home&Lifestyle/(10)Stationery&Craft/Artworks.jpg",
            },
            {
              id: 2,
              tittle: "Gifts & Wrapping",
              image:
                "/catagory/Home&Lifestyle/(10)Stationery&Craft/Gifts&Wrapping.jpg",
            },
            {
              id: 3,
              tittle: "Packaging & Cartons",
              image:
                "/catagory/Home&Lifestyle/(10)Stationery&Craft/Packaging&Cartons.jpg",
            },
            {
              id: 4,
              tittle: "Paper Products",
              image:
                "/catagory/Home&Lifestyle/(10)Stationery&Craft/PaperProducts.jpg",
            },
            {
              id: 5,
              tittle: "Pens",
              image: "/catagory/Home&Lifestyle/(10)Stationery&Craft/Pens.jpg",
            },
            {
              id: 6,
              tittle: "Religious Items",
              image:
                "/catagory/Home&Lifestyle/(10)Stationery&Craft/ReligiousItems.jpg",
            },
            {
              id: 7,
              tittle: "School & Office Equipment",
              image:
                "/catagory/Home&Lifestyle/(10)Stationery&Craft/School&OfficeEquipment.jpg",
            },
            {
              id: 8,
              tittle: "Sewing",
              image: "/catagory/Home&Lifestyle/(10)Stationery&Craft/Sewing.jpg",
            },
          ],
        },
        {
          id: 11,
          tittle: "Media & Music",
          nastedCatagory: [
            {
              id: 1,
              tittle: "DJ, Karaoke & Electronic Music",
              image:
                "/catagory/Home&Lifestyle/(11)Media&Music/DJ,Karaoke&ElectronicMusic.jpg",
            },
            {
              id: 2,
              tittle: "Drums & Percussion",
              image:
                "/catagory/Home&Lifestyle/(11)Media&Music/Drums&Percussion.jpg",
            },
            {
              id: 3,
              tittle: "Guiter",
              image: "/catagory/Home&Lifestyle/(11)Media&Music/Guiter.jpg",
            },
            {
              id: 4,
              tittle: "Guiter and Bass Accessories",
              image:
                "/catagory/Home&Lifestyle/(11)Media&Music/GuiterandBassAccessories.jpg",
            },
            {
              id: 5,
              tittle: "Keyboards & Piano",
              image:
                "/catagory/Home&Lifestyle/(11)Media&Music/Keyboards&Piano.jpg",
            },
            {
              id: 6,
              tittle: "Labu Flutes",
              image: "/catagory/Home&Lifestyle/(11)Media&Music/LabuFlutes.jpg",
            },
            {
              id: 7,
              tittle: "Musical Instrument",
              image:
                "/catagory/Home&Lifestyle/(11)Media&Music/MusicalInstrument.jpg",
            },
            {
              id: 8,
              tittle: "Orchestral Strings Accessories",
              image:
                "/catagory/Home&Lifestyle/(11)Media&Music/OrchestralStringsAccessories.jpg",
            },
            {
              id: 9,
              tittle: "Ukulele",
              image: "/catagory/Home&Lifestyle/(11)Media&Music/Ukulele.jpg",
            },
            {
              id: 10,
              tittle: "Yamaha Music Bangladesh",
              image:
                "/catagory/Home&Lifestyle/(11)Media&Music/YamahaMusicBangladesh.jpg",
            },
          ],
        },
        {
          id: 12,
          tittle: "Books",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bangla Literature",
              image: "/catagory/Home&Lifestyle/(12)Books/BanglaLiterature.jpg",
            },
            {
              id: 2,
              tittle: "Bangla Meditation Books",
              image:
                "/catagory/Home&Lifestyle/(12)Books/BanglaMeditationBooks.jpg",
            },
            {
              id: 3,
              tittle: "eBooks",
              image: "/catagory/Home&Lifestyle/(12)Books/eBooks.jpg",
            },
            {
              id: 4,
              tittle: "Educational Books",
              image: "/catagory/Home&Lifestyle/(12)Books/EducationalBooks.jpg",
            },
            {
              id: 5,
              tittle: "English Books",
              image: "/catagory/Home&Lifestyle/(12)Books/EnglishBooks.jpg",
            },
            {
              id: 6,
              tittle: "English Literature",
              image: "/catagory/Home&Lifestyle/(12)Books/EnglishLiterature.jpg",
            },
            {
              id: 7,
              tittle: "English Meditation Books",
              image:
                "/catagory/Home&Lifestyle/(12)Books/EnglishMeditationBooks.jpg",
            },
            {
              id: 8,
              tittle: "Religious Books",
              image: "/catagory/Home&Lifestyle/(12)Books/ReligiousBooks.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      tittle: "Sports & Outdoors",
      icon: <BiBasketball />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Exercise & Fitness",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Citizen Sports",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/CitizenSports.jpg",
            },
            {
              id: 2,
              tittle: "Dumbbells & Weight",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/Dumbbells&Weight.jpg",
            },
            {
              id: 3,
              tittle: "Elliptical Trainers",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/EllipticalTrainers.jpg",
            },
            {
              id: 4,
              tittle: "Exercise Bikes",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/ExerciseBikes.jpg",
            },
            {
              id: 5,
              tittle: "Fitness Accessories",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/FitnessAccessories.jpg",
            },
            {
              id: 6,
              tittle: "FITNESS-MART",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/FITNESS-MART.jpg",
            },
            {
              id: 7,
              tittle: "Regal Sports",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/RegalSports.jpg",
            },
            {
              id: 8,
              tittle: "Sports House",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/SportsHouse.jpg",
            },
            {
              id: 9,
              tittle: "Sports World",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/SportsWorld.jpg",
            },
            {
              id: 10,
              tittle: "Strength Training Equipment",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/StrengthTrainingEquipment.jpg",
            },
            {
              id: 11,
              tittle: "Treadmills",
              image:
                "/catagory/Sports&Outdoors/(1)Exercise&Fitness/Treadmills.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Treadmills",
          nastedCatagory: [
            {
              id: 1,
              tittle: "ADVANTEK",
              image: "/catagory/Sports&Outdoors/(2)Treadmills/ADVANTEK.jpg",
            },
            {
              id: 2,
              tittle: "Daily Youth",
              image: "/catagory/Sports&Outdoors/(2)Treadmills/DailyYouth.jpg",
            },
            {
              id: 3,
              tittle: "Evertop",
              image: "/catagory/Sports&Outdoors/(2)Treadmills/Evertop.jpg",
            },
            {
              id: 4,
              tittle: "KPOWER",
              image: "/catagory/Sports&Outdoors/(2)Treadmills/KPOWER.jpg",
            },
            {
              id: 5,
              tittle: "OMA Fitness",
              image: "/catagory/Sports&Outdoors/(2)Treadmills/OMAFitness.jpg",
            },
            {
              id: 6,
              tittle: "YIJIAN",
              image: "/catagory/Sports&Outdoors/(2)Treadmills/YIJIAN.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Exercise Bikes",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Evertop",
              image: "/catagory/Sports&Outdoors/(3)ExerciseBikes/Evertop.jpg",
            },
            {
              id: 2,
              tittle: "KPOWER",
              image: "/catagory/Sports&Outdoors/(3)ExerciseBikes/KPOWER.jpg",
            },
            {
              id: 3,
              tittle: "OMA Fitness",
              image:
                "/catagory/Sports&Outdoors/(3)ExerciseBikes/OMAFitness.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Dumbbells",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Citizen Sports",
              image: "/catagory/Sports&Outdoors/(4)Dumbbells/CitizenSports.jpg",
            },
            {
              id: 2,
              tittle: "FITNESS MART",
              image: "/catagory/Sports&Outdoors/(4)Dumbbells/FITNESSMART.jpg",
            },
            {
              id: 3,
              tittle: "Sports House",
              image: "/catagory/Sports&Outdoors/(4)Dumbbells/SportsHouse.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Cycling",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Begasso",
              image: "/catagory/Sports&Outdoors/(5)Cycling/Begasso.jpg",
            },
            {
              id: 2,
              tittle: "BMX",
              image: "/catagory/Sports&Outdoors/(5)Cycling/BMX.jpg",
            },
            {
              id: 3,
              tittle: "Cycle Accessories",
              image:
                "/catagory/Sports&Outdoors/(5)Cycling/CycleAccessories.jpg",
            },
            {
              id: 4,
              tittle: "Duranta Bicycle",
              image: "/catagory/Sports&Outdoors/(5)Cycling/DurantaBicycle.jpg",
            },
            {
              id: 5,
              tittle: "Gear Cycles",
              image: "/catagory/Sports&Outdoors/(5)Cycling/GearCycles.jpg",
            },
            {
              id: 6,
              tittle: "Kids Bikes",
              image: "/catagory/Sports&Outdoors/(5)Cycling/KidsBikes.jpg",
            },
            {
              id: 7,
              tittle: "Mountain Bikes",
              image: "/catagory/Sports&Outdoors/(5)Cycling/MountainBikes.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Boxing & Martial Arts",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Boxing Gloves",
              image:
                "/catagory/Sports&Outdoors/(6)Boxing&MartialArts/BoxingGloves.jpg",
            },
            {
              id: 2,
              tittle: "Boxing Protective Gear",
              image:
                "/catagory/Sports&Outdoors/(6)Boxing&MartialArts/BoxingProtectiveGear.jpg",
            },
            {
              id: 3,
              tittle: "Martial Art Equipment",
              image:
                "/catagory/Sports&Outdoors/(6)Boxing&MartialArts/MartialArtEquipment.jpg",
            },
            {
              id: 4,
              tittle: "Punching Bags & Accessories",
              image:
                "/catagory/Sports&Outdoors/(6)Boxing&MartialArts/PunchingBags&Accessories.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Shoes & Clothing",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Accessories",
              image:
                "/catagory/Sports&Outdoors/(7)Shoes&Clothing/Accessories.jpg",
            },
            {
              id: 2,
              tittle: "Clothing",
              image: "/catagory/Sports&Outdoors/(7)Shoes&Clothing/Clothing.jpg",
            },
            {
              id: 3,
              tittle: "DECATHLON",
              image:
                "/catagory/Sports&Outdoors/(7)Shoes&Clothing/DECATHLON.jpg",
            },
            {
              id: 4,
              tittle: "Falcon Fit",
              image:
                "/catagory/Sports&Outdoors/(7)Shoes&Clothing/FalconFit.jpg",
            },
            {
              id: 5,
              tittle: "Football Jersey",
              image:
                "/catagory/Sports&Outdoors/(7)Shoes&Clothing/FootballJersey.jpg",
            },
            {
              id: 6,
              tittle: "Gaming Shoes",
              image:
                "/catagory/Sports&Outdoors/(7)Shoes&Clothing/GamingShoes.jpg",
            },
            {
              id: 7,
              tittle: "Lotto",
              image: "/catagory/Sports&Outdoors/(7)Shoes&Clothing/Lotto.jpg",
            },
            {
              id: 8,
              tittle: "PUMA",
              image: "/catagory/Sports&Outdoors/(7)Shoes&Clothing/PUMA.jpg",
            },
            {
              id: 9,
              tittle: "Running Shoes",
              image:
                "/catagory/Sports&Outdoors/(7)Shoes&Clothing/RunningShoes.jpg",
            },
            {
              id: 10,
              tittle: "Sports Sneakers",
              image:
                "/catagory/Sports&Outdoors/(7)Shoes&Clothing/SportsSneakers.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Outdoor Recreation",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Canoes & Kayaks",
              image:
                "/catagory/Sports&Outdoors/(8)OutdoorRecreation/Canoes&Kayaks.jpg",
            },
            {
              id: 2,
              tittle: "Fishing",
              image:
                "/catagory/Sports&Outdoors/(8)OutdoorRecreation/Fishing.jpg",
            },
            {
              id: 3,
              tittle: "Golf",
              image: "/catagory/Sports&Outdoors/(8)OutdoorRecreation/Golf.jpg",
            },
            {
              id: 4,
              tittle: "Skateboards",
              image:
                "/catagory/Sports&Outdoors/(8)OutdoorRecreation/Skateboards.jpg",
            },
            {
              id: 5,
              tittle: "Water Sports",
              image:
                "/catagory/Sports&Outdoors/(8)OutdoorRecreation/WaterSports.jpg",
            },
          ],
        },
        {
          id: 9,
          tittle: "Camping & Hiking",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Climbing Accessories",
              image:
                "/catagory/Sports&Outdoors/(9)Camping&Hiking/ClimbingAccessories.jpg",
            },
            {
              id: 2,
              tittle: "Cooking Essentials",
              image:
                "/catagory/Sports&Outdoors/(9)Camping&Hiking/CookingEssentials.jpg",
            },
            {
              id: 3,
              tittle: "DECATHLON",
              image:
                "/catagory/Sports&Outdoors/(9)Camping&Hiking/DECATHLON.jpg",
            },
            {
              id: 4,
              tittle: "Hammock",
              image: "/catagory/Sports&Outdoors/(9)Camping&Hiking/Hammock.jpg",
            },
            {
              id: 5,
              tittle: "Hiking Backpacks",
              image:
                "/catagory/Sports&Outdoors/(9)Camping&Hiking/HikingBackpacks.jpg",
            },
            {
              id: 6,
              tittle: "Sleeping Bags",
              image:
                "/catagory/Sports&Outdoors/(9)Camping&Hiking/SleepingBags.jpg",
            },
            {
              id: 7,
              tittle: "Tents",
              image: "/catagory/Sports&Outdoors/(9)Camping&Hiking/Tents.jpg",
            },
          ],
        },
        {
          id: 10,
          tittle: "Team Sports",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Basketball",
              image: "/catagory/Sports&Outdoors/(10)TeamSports/Basketball.jpg",
            },
            {
              id: 2,
              tittle: "Cricket",
              image: "/catagory/Sports&Outdoors/(10)TeamSports/Cricket.jpg",
            },
            {
              id: 3,
              tittle: "Football",
              image: "/catagory/Sports&Outdoors/(10)TeamSports/Football.jpg",
            },
            {
              id: 4,
              tittle: "Jersey",
              image: "/catagory/Sports&Outdoors/(10)TeamSports/Jersey.jpg",
            },
            {
              id: 5,
              tittle: "Racket Sports",
              image:
                "/catagory/Sports&Outdoors/(10)TeamSports/RacketSports.jpg",
            },
            {
              id: 6,
              tittle: "Volleyball",
              image: "/catagory/Sports&Outdoors/(10)TeamSports/Volleyball.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 12,
      tittle: "Automotive & Motorbike",
      icon: <AiOutlineCar />,
      nastedCatagory: [
        {
          id: 1,
          tittle: "Oil & Fluids",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Additives",
              image:
                "/catagory/Automotive&Motorbike/(1)Oi&Fluids/Additives.jpg",
            },
            {
              id: 2,
              tittle: "Cleaners",
              image: "/catagory/Automotive&Motorbike/(1)Oi&Fluids/Cleaners.jpg",
            },
            {
              id: 3,
              tittle: "Cycle Engine Oil",
              image:
                "/catagory/Automotive&Motorbike/(1)Oi&Fluids/CycleEngineOil.jpg",
            },
            {
              id: 4,
              tittle: "Greases & Lubricants",
              image:
                "/catagory/Automotive&Motorbike/(1)Oi&Fluids/Greases&Lubricants.jpg",
            },
            {
              id: 5,
              tittle: "Lubricants & Solvents",
              image:
                "/catagory/Automotive&Motorbike/(1)Oi&Fluids/Lubricants&Solvents.jpg",
            },
            {
              id: 6,
              tittle: "Oils",
              image: "/catagory/Automotive&Motorbike/(1)Oi&Fluids/Oils.jpg",
            },
          ],
        },
        {
          id: 2,
          tittle: "Car Interior Accessories",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Air Fresheners",
              image:
                "/catagory/Automotive&Motorbike/(2)CarInteriorAccessories/AirFresheners.jpg",
            },
            {
              id: 2,
              tittle: "Consoles & Organizers",
              image:
                "/catagory/Automotive&Motorbike/(2)CarInteriorAccessories/Consoles&Organizers.jpg",
            },
            {
              id: 3,
              tittle: "Electrical Appliances",
              image:
                "/catagory/Automotive&Motorbike/(2)CarInteriorAccessories/ElectricalAppliances.jpg",
            },
            {
              id: 4,
              tittle: "Floor Mats & Cargo Liners",
              image:
                "/catagory/Automotive&Motorbike/(2)CarInteriorAccessories/FloorMats&CargoLiners.jpg",
            },
            {
              id: 5,
              tittle: "Key Chains",
              image:
                "/catagory/Automotive&Motorbike/(2)CarInteriorAccessories/KeyChains.jpg",
            },
            {
              id: 6,
              tittle: "Mirrors",
              image:
                "/catagory/Automotive&Motorbike/(2)CarInteriorAccessories/Mirrors.jpg",
            },
            {
              id: 7,
              tittle: "Pedals & Pedal Accessories",
              image:
                "/catagory/Automotive&Motorbike/(2)CarInteriorAccessories/Pedals&PedalAccessories.jpg",
            },
            {
              id: 8,
              tittle: "Seat Covers & Accessories",
              image:
                "/catagory/Automotive&Motorbike/(2)CarInteriorAccessories/SeatCovers&Accessories.jpg",
            },
            {
              id: 9,
              tittle: "Steering Wheels & Accessories",
              image:
                "/catagory/Automotive&Motorbike/(2)CarInteriorAccessories/SteeringWheels&Accessories.jpg",
            },
          ],
        },
        {
          id: 3,
          tittle: "Car Exterior Accessories",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Body Armor",
              image:
                "/catagory/Automotive&Motorbike/(3)CarExteriorAccessories/BodyArmor.jpg",
            },
            {
              id: 2,
              tittle: "Bumpers & Bumper Accessories",
              image:
                "/catagory/Automotive&Motorbike/(3)CarExteriorAccessories/Bumpers&BumperAccessories.jpg",
            },
            {
              id: 3,
              tittle: "Bumper Stickers, Decals & Magnets",
              image:
                "/catagory/Automotive&Motorbike/(3)CarExteriorAccessories/BumperStickers,Decals&Magnets.jpg",
            },
            {
              id: 4,
              tittle: "Covers",
              image:
                "/catagory/Automotive&Motorbike/(3)CarExteriorAccessories/Covers.jpg",
            },
            {
              id: 5,
              tittle: "Emblems",
              image:
                "/catagory/Automotive&Motorbike/(3)CarExteriorAccessories/Emblems.jpg",
            },
            {
              id: 6,
              tittle: "Horns & Accessories",
              image:
                "/catagory/Automotive&Motorbike/(3)CarExteriorAccessories/Horns&Accessories.jpg",
            },
            {
              id: 7,
              tittle: "License Plate Covers & Frames",
              image:
                "/catagory/Automotive&Motorbike/(3)CarExteriorAccessories/LicensePlateCovers&Frames.jpg",
            },
            {
              id: 8,
              tittle: "Mirrors",
              image:
                "/catagory/Automotive&Motorbike/(3)CarExteriorAccessories/Mirrors.jpg",
            },
            {
              id: 9,
              tittle: "Roll Bars, Roll Cages & Covers",
              image:
                "/catagory/Automotive&Motorbike/(3)CarExteriorAccessories/RollBars,RollCages&Covers.jpg",
            },
          ],
        },
        {
          id: 4,
          tittle: "Car Parts & Spares",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Alternators & Generators",
              image:
                "/catagory/Automotive&Motorbike/(4)CarParts&Spares/Alternators&Generators.jpg",
            },
            {
              id: 2,
              tittle: "Body Parts",
              image:
                "/catagory/Automotive&Motorbike/(4)CarParts&Spares/BodyParts.jpg",
            },
            {
              id: 3,
              tittle: "Engine Cooling & Climate Control",
              image:
                "/catagory/Automotive&Motorbike/(4)CarParts&Spares/EngineCooling&ClimateControl.jpg",
            },
            {
              id: 4,
              tittle: "Engine Parts",
              image:
                "/catagory/Automotive&Motorbike/(4)CarParts&Spares/EngineParts.jpg",
            },
            {
              id: 5,
              tittle: "Exhaust & Emissions",
              image:
                "/catagory/Automotive&Motorbike/(4)CarParts&Spares/Exhaust&Emissions.jpg",
            },
            {
              id: 6,
              tittle: "Fuel System",
              image:
                "/catagory/Automotive&Motorbike/(4)CarParts&Spares/FuelSystem.jpg",
            },
            {
              id: 7,
              tittle: "Ignition & Electrical",
              image:
                "/catagory/Automotive&Motorbike/(4)CarParts&Spares/Ignition&Electrical.jpg",
            },
            {
              id: 8,
              tittle: "Lighting & Electrical",
              image:
                "/catagory/Automotive&Motorbike/(4)CarParts&Spares/Lighting&Electrical.jpg",
            },
            {
              id: 9,
              tittle: "Starters & Parts",
              image:
                "/catagory/Automotive&Motorbike/(4)CarParts&Spares/Starters&Parts.jpg",
            },
            {
              id: 10,
              tittle: "Switches",
              image:
                "/catagory/Automotive&Motorbike/(4)CarParts&Spares/Switches.jpg",
            },
          ],
        },
        {
          id: 5,
          tittle: "Motorcycle Riding Gear",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Bandannas",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/Bandannas.jpg",
            },
            {
              id: 2,
              tittle: "Chest & Back Protectors",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/Chest&BackProtectors.jpg",
            },
            {
              id: 3,
              tittle: "Eyewear",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/Eyewear.jpg",
            },
            {
              id: 4,
              tittle: "Face Masks",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/FaceMasks.jpg",
            },
            {
              id: 5,
              tittle: "Footwear",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/Footwear.jpg",
            },
            {
              id: 6,
              tittle: "Gloves",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/Gloves.jpg",
            },
            {
              id: 7,
              tittle: "Helmet",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/Helmet.jpg",
            },
            {
              id: 8,
              tittle: "Helmets Accessories",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/HelmetsAccessories.jpg",
            },
            {
              id: 9,
              tittle: "Jackets & Vests",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/Jackets&Vests.jpg",
            },
            {
              id: 10,
              tittle: "Jerseys",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/Jerseys.jpg",
            },
            {
              id: 11,
              tittle: "Knee & Shin Protection",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/Knee&ShinProtection.jpg",
            },
            {
              id: 12,
              tittle: "Rain Boot Covers",
              image:
                "/catagory/Automotive&Motorbike/(5)MotorcycleRidingGear/RainBootCovers.jpg",
            },
          ],
        },
        {
          id: 6,
          tittle: "Motorcylce Parts & Spares",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Air Intake & Fuel Delivery",
              image:
                "/catagory/Automotive&Motorbike/(6)MotorcylceParts&Spares/AirIntake&FuelDelivery.jpg",
            },
            {
              id: 2,
              tittle: "Body & Frame",
              image:
                "/catagory/Automotive&Motorbike/(6)MotorcylceParts&Spares/Body&Frame.jpg",
            },
            {
              id: 3,
              tittle: "Brakes & Suspension",
              image:
                "/catagory/Automotive&Motorbike/(6)MotorcylceParts&Spares/Brakes&Suspension.jpg",
            },
            {
              id: 4,
              tittle: "Decals & Emblems",
              image:
                "/catagory/Automotive&Motorbike/(6)MotorcylceParts&Spares/Decals&Emblems.jpg",
            },
            {
              id: 5,
              tittle: "Drivetrain & Transmission",
              image:
                "/catagory/Automotive&Motorbike/(6)MotorcylceParts&Spares/Drivetrain&Transmission.jpg",
            },
            {
              id: 6,
              tittle: "Exhaust & Accessories",
              image:
                "/catagory/Automotive&Motorbike/(6)MotorcylceParts&Spares/Exhaust&Accessories.jpg",
            },
            {
              id: 7,
              tittle: "Luggage & Saddlebags",
              image:
                "/catagory/Automotive&Motorbike/(6)MotorcylceParts&Spares/Luggage&Saddlebags.jpg",
            },
            {
              id: 8,
              tittle: "Mirrors",
              image:
                "/catagory/Automotive&Motorbike/(6)MotorcylceParts&Spares/Mirrors.jpg",
            },
          ],
        },
        {
          id: 7,
          tittle: "Vehicle Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Car Polishes & Waxes",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CarPolishes&Waxes.jpg",
            },
            {
              id: 2,
              tittle: "Cleaners and Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CleanersandKits.jpg",
            },
            {
              id: 3,
              tittle: "Paints & Primers",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Paints&Primers.jpg",
            },
            {
              id: 4,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 5,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 6,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
          ],
        },
        {
          id: 8,
          tittle: "Vehicle Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Car Polishes & Waxes",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CarPolishes&Waxes.jpg",
            },
            {
              id: 2,
              tittle: "Cleaners and Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CleanersandKits.jpg",
            },
            {
              id: 3,
              tittle: "Paints & Primers",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Paints&Primers.jpg",
            },
            {
              id: 4,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 5,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 6,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
          ],
        },
        {
          id: 9,
          tittle: "Vehicle Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Car Polishes & Waxes",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CarPolishes&Waxes.jpg",
            },
            {
              id: 2,
              tittle: "Cleaners and Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CleanersandKits.jpg",
            },
            {
              id: 3,
              tittle: "Paints & Primers",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Paints&Primers.jpg",
            },
            {
              id: 4,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 5,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 6,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
          ],
        },
        {
          id: 10,
          tittle: "Vehicle Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Car Polishes & Waxes",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CarPolishes&Waxes.jpg",
            },
            {
              id: 2,
              tittle: "Cleaners and Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CleanersandKits.jpg",
            },
            {
              id: 3,
              tittle: "Paints & Primers",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Paints&Primers.jpg",
            },
            {
              id: 4,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 5,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 6,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
          ],
        },
        {
          id: 11,
          tittle: "Vehicle Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Car Polishes & Waxes",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CarPolishes&Waxes.jpg",
            },
            {
              id: 2,
              tittle: "Cleaners and Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CleanersandKits.jpg",
            },
            {
              id: 3,
              tittle: "Paints & Primers",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Paints&Primers.jpg",
            },
            {
              id: 4,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 5,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 6,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
          ],
        },
        {
          id: 12,
          tittle: "Vehicle Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Car Polishes & Waxes",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CarPolishes&Waxes.jpg",
            },
            {
              id: 2,
              tittle: "Cleaners and Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CleanersandKits.jpg",
            },
            {
              id: 3,
              tittle: "Paints & Primers",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Paints&Primers.jpg",
            },
            {
              id: 4,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 5,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 6,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
          ],
        },
        {
          id: 13,
          tittle: "Vehicle Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Car Polishes & Waxes",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CarPolishes&Waxes.jpg",
            },
            {
              id: 2,
              tittle: "Cleaners and Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CleanersandKits.jpg",
            },
            {
              id: 3,
              tittle: "Paints & Primers",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Paints&Primers.jpg",
            },
            {
              id: 4,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 5,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 6,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
          ],
        },
        {
          id: 14,
          tittle: "Vehicle Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Car Polishes & Waxes",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CarPolishes&Waxes.jpg",
            },
            {
              id: 2,
              tittle: "Cleaners and Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CleanersandKits.jpg",
            },
            {
              id: 3,
              tittle: "Paints & Primers",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Paints&Primers.jpg",
            },
            {
              id: 4,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 5,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 6,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
          ],
        },
        {
          id: 15,
          tittle: "Vehicle Care",
          nastedCatagory: [
            {
              id: 1,
              tittle: "Car Polishes & Waxes",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CarPolishes&Waxes.jpg",
            },
            {
              id: 2,
              tittle: "Cleaners and Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CleanersandKits.jpg",
            },
            {
              id: 3,
              tittle: "Paints & Primers",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Paints&Primers.jpg",
            },
            {
              id: 4,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 5,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 6,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
            {
              id: 7,
              tittle: "Car Polishes & Waxes",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CarPolishes&Waxes.jpg",
            },
            {
              id: 8,
              tittle: "Cleaners and Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/CleanersandKits.jpg",
            },
            {
              id: 9,
              tittle: "Paints & Primers",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Paints&Primers.jpg",
            },
            {
              id: 10,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 11,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 12,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
            {
              id: 13,
              tittle: "Polishing & Rubbing Compounds",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&RubbingCompounds.jpg",
            },
            {
              id: 14,
              tittle: "Polishing & Waxing Kits",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Polishing&WaxingKits.jpg",
            },
            {
              id: 15,
              tittle: "Tire & Wheel Care",
              image:
                "/catagory/Automotive&Motorbike/(7)VehicleCare/Tire&WheelCare.jpg",
            },
          ],
        },
      ],
    },
  ];
  const trendingData = [
    {
      key: 1,
      name: "Trsoye 6604 Stainless Steel Quartz Wrist Watch For Men - Rose Gold",
      mainPrice: "1,55000",
      price: "1,65000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: watch,
        },
      ],
    },
    {
      key: 2,
      name: "Royal Enfield Hunter 350",
      mainPrice: "290,000",
      price: "300,000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: royalEnfield,
        },
      ],
    },
    {
      key: 3,
      name: "Apple iPhone 15 Pro Max 256GB",
      mainPrice: "174,990",
      price: "195,990",
      discount: "-11%",
      review: "4.8",
      pcLeft: 0,
      images: [
        {
          id: 1,
          image: iphone15,
        },
      ],
    },
    {
      key: 4,
      name: "Full Sleeve Casual Shirt For Man - Shirt For Men - Shirt For Men - Shirt",
      mainPrice: "499",
      price: "1,600",
      discount: "-11%",
      review: "4.5",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: watch,
        },
      ],
    },
    {
      key: 5,
      name: "Yamaha R15 M",
      mainPrice: "490,000",
      price: "500,000",
      discount: "-10%",
      review: "4.9",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: yamahaR15,
        },
      ],
    },
    {
      key: 6,
      name: "Men Shoes Yez Slip on Fashion Sneakers Male Sport Running Shoes Breathable Training Walking Tennis Shoes",
      mainPrice: "2,199",
      price: "2,999",
      discount: "-12%",
      review: "4.7",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: shose,
        },
      ],
    },
    {
      key: 7,
      name: "MacBook Air 13 2020 M1 (8/256 GB)",
      mainPrice: "99,999",
      price: "113,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: productImg,
        },
      ],
    },
    {
      key: 8,
      name: "Nokia 3360 Dual SIM Feature Phone",
      mainPrice: "8,999",
      price: "10,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: nokia3360,
        },
      ],
    },
    {
      key: 9,
      name: "Men Shoes Yez Slip on Fashion Sneakers Male Sport Running Shoes Breathable Training Walking Tennis Shoes",
      mainPrice: "2,199",
      price: "2,999",
      discount: "-12%",
      review: "4.7",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: shose,
        },
      ],
    },
    {
      key: 10,
      name: "Apple iPhone 15 Pro Max 256GB",
      mainPrice: "174,990",
      price: "195,990",
      discount: "-11%",
      review: "4.8",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: iphone15,
        },
      ],
    },
    {
      key: 11,
      name: "Yamaha R15 M",
      mainPrice: "490,000",
      price: "500,000",
      discount: "-10%",
      review: "4.9",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: yamahaR15,
        },
      ],
    },
    {
      key: 12,
      name: "Royal Enfield Hunter 350",
      mainPrice: "290,000",
      price: "300,000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: royalEnfield,
        },
      ],
    },
    {
      key: 13,
      name: "Nokia 3360 Dual SIM Feature Phone",
      mainPrice: "8,999",
      price: "10,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: nokia3360,
        },
      ],
    },
    {
      key: 14,
      name: "Trsoye 6604 Stainless Steel Quartz Wrist Watch For Men - Rose Gold",
      mainPrice: "1,55000",
      price: "1,65000",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: watch,
        },
      ],
    },
    {
      key: 15,
      name: "Men Shoes Yez Slip on Fashion Sneakers Male Sport Running Shoes Breathable Training Walking Tennis Shoes",
      mainPrice: "2,199",
      price: "2,999",
      discount: "-12%",
      review: "4.7",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: shose,
        },
      ],
    },
    {
      key: 16,
      name: "MacBook Air 13 2020 M1 (8/256 GB)",
      mainPrice: "99,999",
      price: "113,999",
      discount: "-12%",
      review: "4.8",
      pcLeft: 40,
      images: [
        {
          id: 1,
          image: productImg,
        },
      ],
    },
  ];
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/category",
      element: (
        <>
          <Category />
        </>
      ),
    },
    // {
    //   path: "/product",
    //   element: (
    //     <>
    //       <Product />
    //     </>
    //   ),
    // },
  ]);

  return (
    <div className="">
      <cetagoryContext.Provider value={cetagoryJson}>
        <trandingContext.Provider value={trendingData}>
          <RouterProvider router={router} />
        </trandingContext.Provider>
      </cetagoryContext.Provider>
    </div>
  );
}

export default App;
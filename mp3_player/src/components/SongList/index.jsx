import React, { useState, useEffect } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

import { axiosInstance } from '../../AxiosInstance.jsx';
import './index.css';
import Carousel from './../Carousel/index';

const musicList = [
   {
      id: 1109731,
      readable: true,
      title: 'Lose Yourself (From "8 Mile" Soundtrack)',
      title_short: "Lose Yourself",
      title_version: '(From "8 Mile" Soundtrack)',
      link: "https://www.deezer.com/track/1109731",
      duration: 326,
      rank: 982936,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
      md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 119606,
         title: "Curtain Call: The Hits",
         cover: "https://api.deezer.com/album/119606/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
         md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
         tracklist: "https://api.deezer.com/album/119606/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 1109737,
      readable: true,
      title: "The Real Slim Shady",
      title_short: "The Real Slim Shady",
      title_version: "",
      link: "https://www.deezer.com/track/1109737",
      duration: 284,
      rank: 953631,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-d.dzcdn.net/stream/c-d28ee67c24d60e740866c7709d772f55-12.mp3",
      md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 119606,
         title: "Curtain Call: The Hits",
         cover: "https://api.deezer.com/album/119606/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
         md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
         tracklist: "https://api.deezer.com/album/119606/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 1109739,
      readable: true,
      title: "Mockingbird",
      title_short: "Mockingbird",
      title_version: "",
      link: "https://www.deezer.com/track/1109739",
      duration: 251,
      rank: 990844,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-6.dzcdn.net/stream/c-655dfb802c35579d26a32136e3d0e7b3-12.mp3",
      md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 119606,
         title: "Curtain Call: The Hits",
         cover: "https://api.deezer.com/album/119606/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
         md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
         tracklist: "https://api.deezer.com/album/119606/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 916424,
      readable: true,
      title: "Without Me",
      title_short: "Without Me",
      title_version: "",
      link: "https://www.deezer.com/track/916424",
      duration: 290,
      rank: 961431,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-c.dzcdn.net/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3",
      md5_image: "ec3c8ed67427064c70f67e5815b74cef",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 103248,
         title: "The Eminem Show",
         cover: "https://api.deezer.com/album/103248/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
         md5_image: "ec3c8ed67427064c70f67e5815b74cef",
         tracklist: "https://api.deezer.com/album/103248/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 6461440,
      readable: true,
      title: "Love The Way You Lie",
      title_short: "Love The Way You Lie",
      title_version: "",
      link: "https://www.deezer.com/track/6461440",
      duration: 263,
      rank: 919864,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 1,
      preview:
         "https://cdns-preview-1.dzcdn.net/stream/c-1ed50e5b3118c99be858fc305609e62a-15.mp3",
      md5_image: "be682506145061814eddee648edb7c59",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 595243,
         title: "Recovery",
         cover: "https://api.deezer.com/album/595243/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/1000x1000-000000-80-0-0.jpg",
         md5_image: "be682506145061814eddee648edb7c59",
         tracklist: "https://api.deezer.com/album/595243/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 1109730,
      readable: true,
      title: "Stan",
      title_short: "Stan",
      title_version: "",
      link: "https://www.deezer.com/track/1109730",
      duration: 404,
      rank: 934036,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-d.dzcdn.net/stream/c-dbbd5055e0b4b64397e939f75ca0662b-13.mp3",
      md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 119606,
         title: "Curtain Call: The Hits",
         cover: "https://api.deezer.com/album/119606/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
         md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
         tracklist: "https://api.deezer.com/album/119606/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 1109729,
      readable: true,
      title: "My Name Is",
      title_short: "My Name Is",
      title_version: "",
      link: "https://www.deezer.com/track/1109729",
      duration: 268,
      rank: 808594,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-b.dzcdn.net/stream/c-b410ccaf3c000eeaa74025f558892638-12.mp3",
      md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 119606,
         title: "Curtain Call: The Hits",
         cover: "https://api.deezer.com/album/119606/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
         md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
         tracklist: "https://api.deezer.com/album/119606/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 854914322,
      readable: true,
      title: "Godzilla",
      title_short: "Godzilla",
      title_version: "",
      link: "https://www.deezer.com/track/854914322",
      duration: 210,
      rank: 881600,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 1,
      preview:
         "https://cdns-preview-d.dzcdn.net/stream/c-d5a91f3cf9c2b399c9734223623a3c67-6.mp3",
      md5_image: "4d00a7848dc8af475973ff1761ad828d",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 127270232,
         title: "Music To Be Murdered By",
         cover: "https://api.deezer.com/album/127270232/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/1000x1000-000000-80-0-0.jpg",
         md5_image: "4d00a7848dc8af475973ff1761ad828d",
         tracklist: "https://api.deezer.com/album/127270232/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 72160317,
      readable: true,
      title: "The Monster",
      title_short: "The Monster",
      title_version: "",
      link: "https://www.deezer.com/track/72160317",
      duration: 250,
      rank: 878453,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 1,
      preview:
         "https://cdns-preview-1.dzcdn.net/stream/c-19bb8452c0c5709dde021b7f92c98ab7-6.mp3",
      md5_image: "7c71224818ac99b16570357b2f98e041",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 7090505,
         title: "The Marshall Mathers LP2 (Deluxe)",
         cover: "https://api.deezer.com/album/7090505/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/1000x1000-000000-80-0-0.jpg",
         md5_image: "7c71224818ac99b16570357b2f98e041",
         tracklist: "https://api.deezer.com/album/7090505/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 6461432,
      readable: true,
      title: "Not Afraid",
      title_short: "Not Afraid",
      title_version: "",
      link: "https://www.deezer.com/track/6461432",
      duration: 248,
      rank: 886593,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 1,
      preview:
         "https://cdns-preview-0.dzcdn.net/stream/c-04c2c479846725eec24a3f40e837d35e-16.mp3",
      md5_image: "be682506145061814eddee648edb7c59",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 595243,
         title: "Recovery",
         cover: "https://api.deezer.com/album/595243/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/1000x1000-000000-80-0-0.jpg",
         md5_image: "be682506145061814eddee648edb7c59",
         tracklist: "https://api.deezer.com/album/595243/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 916426,
      readable: true,
      title: "Sing For The Moment",
      title_short: "Sing For The Moment",
      title_version: "",
      link: "https://www.deezer.com/track/916426",
      duration: 339,
      rank: 926358,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-6.dzcdn.net/stream/c-6a0f240c7bd580e87697146ed3247ab5-8.mp3",
      md5_image: "ec3c8ed67427064c70f67e5815b74cef",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 103248,
         title: "The Eminem Show",
         cover: "https://api.deezer.com/album/103248/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
         md5_image: "ec3c8ed67427064c70f67e5815b74cef",
         tracklist: "https://api.deezer.com/album/103248/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 916445,
      readable: true,
      title: "Till I Collapse",
      title_short: "Till I Collapse",
      title_version: "",
      link: "https://www.deezer.com/track/916445",
      duration: 297,
      rank: 935588,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-1.dzcdn.net/stream/c-12eca10f7e8e55f7f83c14b3552f1940-9.mp3",
      md5_image: "ec3c8ed67427064c70f67e5815b74cef",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 103248,
         title: "The Eminem Show",
         cover: "https://api.deezer.com/album/103248/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
         md5_image: "ec3c8ed67427064c70f67e5815b74cef",
         tracklist: "https://api.deezer.com/album/103248/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 2278034,
      readable: true,
      title: "Big Weenie",
      title_short: "Big Weenie",
      title_version: "",
      link: "https://www.deezer.com/track/2278034",
      duration: 266,
      rank: 864548,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 2,
      preview:
         "https://cdns-preview-b.dzcdn.net/stream/c-b24dc161bb766448c90f5c2b0dd0159e-9.mp3",
      md5_image: "5026c46b38ed035092df6cfc5a4a288f",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 227447,
         title: "Encore",
         cover: "https://api.deezer.com/album/227447/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/5026c46b38ed035092df6cfc5a4a288f/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/5026c46b38ed035092df6cfc5a4a288f/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/5026c46b38ed035092df6cfc5a4a288f/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/5026c46b38ed035092df6cfc5a4a288f/1000x1000-000000-80-0-0.jpg",
         md5_image: "5026c46b38ed035092df6cfc5a4a288f",
         tracklist: "https://api.deezer.com/album/227447/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 916427,
      readable: true,
      title: "Superman",
      title_short: "Superman",
      title_version: "",
      link: "https://www.deezer.com/track/916427",
      duration: 350,
      rank: 948247,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-d.dzcdn.net/stream/c-d56c95b55d8555bd7bb816d9518609d5-9.mp3",
      md5_image: "ec3c8ed67427064c70f67e5815b74cef",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 103248,
         title: "The Eminem Show",
         cover: "https://api.deezer.com/album/103248/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
         md5_image: "ec3c8ed67427064c70f67e5815b74cef",
         tracklist: "https://api.deezer.com/album/103248/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 72160314,
      readable: true,
      title: "Rap God",
      title_short: "Rap God",
      title_version: "",
      link: "https://www.deezer.com/track/72160314",
      duration: 363,
      rank: 810947,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 1,
      preview:
         "https://cdns-preview-2.dzcdn.net/stream/c-2a2a808c0966c0952aa4f6bae6fa98de-6.mp3",
      md5_image: "7c71224818ac99b16570357b2f98e041",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 7090505,
         title: "The Marshall Mathers LP2 (Deluxe)",
         cover: "https://api.deezer.com/album/7090505/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/1000x1000-000000-80-0-0.jpg",
         md5_image: "7c71224818ac99b16570357b2f98e041",
         tracklist: "https://api.deezer.com/album/7090505/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 548348732,
      readable: true,
      title: "Venom (Music From The Motion Picture)",
      title_short: "Venom",
      title_version: "(Music From The Motion Picture)",
      link: "https://www.deezer.com/track/548348732",
      duration: 269,
      rank: 817859,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 1,
      preview:
         "https://cdns-preview-8.dzcdn.net/stream/c-8ad574e54c315bd9f89ba34deb2c7650-6.mp3",
      md5_image: "bf74fc764097630ba58782ae79cfbee6",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 72000342,
         title: "Kamikaze",
         cover: "https://api.deezer.com/album/72000342/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/1000x1000-000000-80-0-0.jpg",
         md5_image: "bf74fc764097630ba58782ae79cfbee6",
         tracklist: "https://api.deezer.com/album/72000342/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 128743593,
      readable: true,
      title: "Forgot About Dre",
      title_short: "Forgot About Dre",
      title_version: "",
      link: "https://www.deezer.com/track/128743593",
      duration: 222,
      rank: 784614,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 2,
      preview:
         "https://cdns-preview-1.dzcdn.net/stream/c-1fc42f1ff89a633c0283c76b8d2f5106-6.mp3",
      md5_image: "0d9a24d054cbc5ab11843beed9f1422b",
      artist: {
         id: 763,
         name: "Dr. Dre",
         link: "https://www.deezer.com/artist/763",
         picture: "https://api.deezer.com/artist/763/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/224c6dfad8137d13e41e045310b23ccb/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/224c6dfad8137d13e41e045310b23ccb/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/224c6dfad8137d13e41e045310b23ccb/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/224c6dfad8137d13e41e045310b23ccb/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/763/top?limit=50",
         type: "artist"
      },
      album: {
         id: 13606387,
         title: "2001",
         cover: "https://api.deezer.com/album/13606387/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/0d9a24d054cbc5ab11843beed9f1422b/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/0d9a24d054cbc5ab11843beed9f1422b/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/0d9a24d054cbc5ab11843beed9f1422b/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/0d9a24d054cbc5ab11843beed9f1422b/1000x1000-000000-80-0-0.jpg",
         md5_image: "0d9a24d054cbc5ab11843beed9f1422b",
         tracklist: "https://api.deezer.com/album/13606387/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 916412,
      readable: true,
      title: "White America",
      title_short: "White America",
      title_version: "",
      link: "https://www.deezer.com/track/916412",
      duration: 324,
      rank: 686645,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-0.dzcdn.net/stream/c-0bc690060eb5139aa62e27a4cd0f3aa9-9.mp3",
      md5_image: "ec3c8ed67427064c70f67e5815b74cef",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 103248,
         title: "The Eminem Show",
         cover: "https://api.deezer.com/album/103248/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
         md5_image: "ec3c8ed67427064c70f67e5815b74cef",
         tracklist: "https://api.deezer.com/album/103248/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 1109744,
      readable: true,
      title: "When I'm Gone",
      title_short: "When I'm Gone",
      title_version: "",
      link: "https://www.deezer.com/track/1109744",
      duration: 281,
      rank: 759837,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-8.dzcdn.net/stream/c-8aaafada99fb0a10485ea594f664d917-13.mp3",
      md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 119606,
         title: "Curtain Call: The Hits",
         cover: "https://api.deezer.com/album/119606/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
         md5_image: "e2b36a9fda865cb2e9ed1476b6291a7d",
         tracklist: "https://api.deezer.com/album/119606/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 1176211,
      readable: true,
      title: "Under The Influence",
      title_short: "Under The Influence",
      title_version: "",
      link: "https://www.deezer.com/track/1176211",
      duration: 321,
      rank: 711973,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 2,
      preview:
         "https://cdns-preview-0.dzcdn.net/stream/c-0c4f867487e0d55aaa10e550084b3ffd-4.mp3",
      md5_image: "941c2d3c366affdc662956559e078a4e",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 125748,
         title: "The Marshall Mathers LP",
         cover: "https://api.deezer.com/album/125748/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/1000x1000-000000-80-0-0.jpg",
         md5_image: "941c2d3c366affdc662956559e078a4e",
         tracklist: "https://api.deezer.com/album/125748/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 2248427,
      readable: true,
      title: "Without Me",
      title_short: "Without Me",
      title_version: "",
      link: "https://www.deezer.com/track/2248427",
      duration: 291,
      rank: 621339,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-3.dzcdn.net/stream/c-3ac428b642d23584f2706d706cfd5b46-13.mp3",
      md5_image: "2d160b4c0d72272b4f5d7f55037d4864",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 224581,
         title: "Curtain Call: The Hits (Deluxe Edition)",
         cover: "https://api.deezer.com/album/224581/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/1000x1000-000000-80-0-0.jpg",
         md5_image: "2d160b4c0d72272b4f5d7f55037d4864",
         tracklist: "https://api.deezer.com/album/224581/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 436510892,
      readable: true,
      title: "Love The Way You Lie (Part II) (Pt. 2)",
      title_short: "Love The Way You Lie (Part II)",
      title_version: "(Pt. 2)",
      link: "https://www.deezer.com/track/436510892",
      duration: 296,
      rank: 632278,
      explicit_lyrics: false,
      explicit_content_lyrics: 3,
      explicit_content_cover: 0,
      preview:
         "https://cdns-preview-6.dzcdn.net/stream/c-6f658fb5521ff4170e8ee549b1a20a26-3.mp3",
      md5_image: "cfdbcb2c4a25789c59c45db793024ce0",
      artist: {
         id: 564,
         name: "Rihanna",
         link: "https://www.deezer.com/artist/564",
         picture: "https://api.deezer.com/artist/564/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/3461977558f68c352862c00bee35603b/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/3461977558f68c352862c00bee35603b/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/3461977558f68c352862c00bee35603b/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/3461977558f68c352862c00bee35603b/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/564/top?limit=50",
         type: "artist"
      },
      album: {
         id: 52755402,
         title: "Loud (Japan Version)",
         cover: "https://api.deezer.com/album/52755402/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/cfdbcb2c4a25789c59c45db793024ce0/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/cfdbcb2c4a25789c59c45db793024ce0/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/cfdbcb2c4a25789c59c45db793024ce0/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/cfdbcb2c4a25789c59c45db793024ce0/1000x1000-000000-80-0-0.jpg",
         md5_image: "cfdbcb2c4a25789c59c45db793024ce0",
         tracklist: "https://api.deezer.com/album/52755402/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 979041,
      readable: true,
      title: "Smack That (Clean)",
      title_short: "Smack That",
      title_version: "(Clean)",
      link: "https://www.deezer.com/track/979041",
      duration: 212,
      rank: 839609,
      explicit_lyrics: false,
      explicit_content_lyrics: 3,
      explicit_content_cover: 2,
      preview:
         "https://cdns-preview-c.dzcdn.net/stream/c-c45ae335d3f89e153c37217f4495cefc-4.mp3",
      md5_image: "bc4d98904d61661cc6d7dd53745340d0",
      artist: {
         id: 38,
         name: "Akon",
         link: "https://www.deezer.com/artist/38",
         picture: "https://api.deezer.com/artist/38/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/dafed3b722037eba7b0c015d47f62e7c/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/dafed3b722037eba7b0c015d47f62e7c/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/dafed3b722037eba7b0c015d47f62e7c/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/dafed3b722037eba7b0c015d47f62e7c/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/38/top?limit=50",
         type: "artist"
      },
      album: {
         id: 108938,
         title: "Konvicted",
         cover: "https://api.deezer.com/album/108938/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/bc4d98904d61661cc6d7dd53745340d0/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/bc4d98904d61661cc6d7dd53745340d0/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/bc4d98904d61661cc6d7dd53745340d0/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/bc4d98904d61661cc6d7dd53745340d0/1000x1000-000000-80-0-0.jpg",
         md5_image: "bc4d98904d61661cc6d7dd53745340d0",
         tracklist: "https://api.deezer.com/album/108938/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 9806802,
      readable: true,
      title: "I Need A Doctor",
      title_short: "I Need A Doctor",
      title_version: "",
      link: "https://www.deezer.com/track/9806802",
      duration: 283,
      rank: 686919,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 1,
      preview:
         "https://cdns-preview-3.dzcdn.net/stream/c-3e8da94c98652c7121fdbb475075aa6d-7.mp3",
      md5_image: "a71f29ab2cfa97c88f69afa9041e5f35",
      artist: {
         id: 763,
         name: "Dr. Dre",
         link: "https://www.deezer.com/artist/763",
         picture: "https://api.deezer.com/artist/763/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/224c6dfad8137d13e41e045310b23ccb/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/224c6dfad8137d13e41e045310b23ccb/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/224c6dfad8137d13e41e045310b23ccb/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/224c6dfad8137d13e41e045310b23ccb/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/763/top?limit=50",
         type: "artist"
      },
      album: {
         id: 897364,
         title: "I Need A Doctor",
         cover: "https://api.deezer.com/album/897364/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/a71f29ab2cfa97c88f69afa9041e5f35/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/a71f29ab2cfa97c88f69afa9041e5f35/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/a71f29ab2cfa97c88f69afa9041e5f35/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/a71f29ab2cfa97c88f69afa9041e5f35/1000x1000-000000-80-0-0.jpg",
         md5_image: "a71f29ab2cfa97c88f69afa9041e5f35",
         tracklist: "https://api.deezer.com/album/897364/tracks",
         type: "album"
      },
      type: "track"
   },
   {
      id: 548348632,
      readable: true,
      title: "Lucky You",
      title_short: "Lucky You",
      title_version: "",
      link: "https://www.deezer.com/track/548348632",
      duration: 244,
      rank: 715316,
      explicit_lyrics: true,
      explicit_content_lyrics: 1,
      explicit_content_cover: 1,
      preview:
         "https://cdns-preview-c.dzcdn.net/stream/c-ce814e88e289e9c11353ab0a976fa742-6.mp3",
      md5_image: "bf74fc764097630ba58782ae79cfbee6",
      artist: {
         id: 13,
         name: "Eminem",
         link: "https://www.deezer.com/artist/13",
         picture: "https://api.deezer.com/artist/13/image",
         picture_small:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
         picture_medium:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
         picture_big:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
         picture_xl:
            "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
         tracklist: "https://api.deezer.com/artist/13/top?limit=50",
         type: "artist"
      },
      album: {
         id: 72000342,
         title: "Kamikaze",
         cover: "https://api.deezer.com/album/72000342/image",
         cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/56x56-000000-80-0-0.jpg",
         cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/250x250-000000-80-0-0.jpg",
         cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/500x500-000000-80-0-0.jpg",
         cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/1000x1000-000000-80-0-0.jpg",
         md5_image: "bf74fc764097630ba58782ae79cfbee6",
         tracklist: "https://api.deezer.com/album/72000342/tracks",
         type: "album"
      },
      type: "track"
   }
];

function SongList() {

   const [curMusic, setCurMusic] = useState(0);
   const [audioFile, setAudioFile] = useState(new Audio(musicList[0].preview));
   const [playing, setPlaying] = useState(false);   

   useEffect(() => {
      playing ? audioFile.pause() : audioFile.play();
   }, [playing]);

   useEffect(() => {
      setAudioFile((prev) => {
         prev.pause();
         return new Audio(musicList[curMusic].preview);
      });
      setPlaying(true);
   }, [curMusic]);

   const togglePlay = () => {
      setPlaying((pre) => !pre);
   };

   return (
      <div className="mt-5">
         <div className="mx-auto">
            <div className="card" style={{ width: "500px" }}>
               <img src={musicList[curMusic].album.cover} height="200px" width="200" className="card-img-top" alt={`image-${curMusic}`} onClick={togglePlay} />
               <div className="card-body">
                  {/* <audio id="audio-player" src={audioFile} controls/> */}
                  <h5>
                     {playing ? <FaPlayCircle  /> : <FaPauseCircle />}
                     {musicList[curMusic].title}
                  </h5>
                  <h6>
                     Album : {musicList[curMusic].album.title} <br />
                     Artist : {musicList[curMusic].artist.name} <br />
                  </h6>
               </div>
            </div>
            <br />
         </div>
         <table className="table table-dark rounded bi-text-center">
            <thead>
               <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Name</th>
                  <th scope="col"></th>
               </tr>
            </thead>
            <tbody>
               {musicList.map((ele, index) => {
                  return (
                     <tr key={index}>
                        <td><img src={ele.album.cover_small} alt='song-thumbnail' /></td>
                        <td>
                           {ele.title_short}
                        </td>
                        <td>{ele.artist.name}</td>
                        <td>{(ele.duration / 60).toFixed(2)} sec</td>
                        <td>
                           <button className="btn btn-danger action-btn" onClick={() => {
                              setCurMusic(index);
                           }}>
                              <i className="fa fa-play" aria-hidden="true"></i>
                           </button>
                        </td>
                     </tr>
                  )
               })}
            </tbody>
         </table>
         <Carousel musicList={musicList}/>
      </div>
   )
}

export default SongList

import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { v4 as uuid } from "uuid";
import { onValue, ref, set } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import "./Search";
import Search from "./Search";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import MyRecords from "./MyRecords";

function App() {
  /*
  const [query, setQuery] = useState("");
  const [readData, setReadData] = useState([]);
  var [searchResults, setSearchResults] = useState([]);
  var [searchResultsTitle, setSearchResultsTitle] = useState([]);
  var [notFound, setNotFound] = useState(null);

  var [term, setTerm] = useState("");
  var [description, setDescription] = useState("");
  var [walletAddress, setWalletAddress] = useState("");

  const SubmitTermForm = () => {
    if (
      term.trim() === "" ||
      description.trim() === "" ||
      walletAddress.trim() === ""
    ) {
      alert("Please provide complete details");
      return;
    } else {
      writeToDatabase();
      alert("Term Added Successfully!");
      setTerm("");
      setDescription("");
      setWalletAddress("");
    }
  };

  // write
  const id = uuid();
  const writeToDatabase = () => {
    set(ref(db, `/data/${id}`), {
      id,
      item: term,
      description: description,
      walletAddress: walletAddress,
    });
  };

  // read
  useEffect(() => {
    onValue(ref(db, "/data"), (record) => {
      const data = record.val();
      if (data != null) {
        var out = [];
        Object.values(data).map((item) => {
          out.push(item);
        });
        setReadData(out);
      }
    });
  }, []);

  // search
  const SearchForQuery = () => {
    var titleResult = [];
    var descriptionResult = [];
    if (query.trim() === "") {
      setNotFound(true);
      return;
    }
    let words = query.split(" ");

    readData.map((record) => {
      var title = record.item;
      var description = record.description;

      let foundTitle = words.every((item) =>
        title.toLowerCase().includes(item.toLowerCase())
      );
      if (foundTitle) {
        titleResult.push(title);
      } else {
        titleResult.push("");
      }

      let foundDescp = words.every((item) =>
        description.toLowerCase().includes(item.toLowerCase())
      );
      if (foundDescp) {
        descriptionResult.push(description);
      } else {
        descriptionResult.push("");
      }
    });

    if (descriptionResult.every((element) => element === "")) {
      descriptionResult = [];
    }
    if (titleResult.every((element) => element === "")) {
      titleResult = [];
    }

    let tempCount =
      titleResult.length > 0 ? titleResult.length : descriptionResult.length;

    for (var i = tempCount - 1; i >= 0; i--) {
      if (
        (titleResult[i] === "" &&
          typeof descriptionResult[i] === "undefined") ||
        (descriptionResult[i] === "" && typeof titleResult[i] === "undefined")
      ) {
        descriptionResult.splice(i, 1);
        titleResult.splice(i, 1);
      }

      if (titleResult[i] === "" && descriptionResult[i] === "") {
        descriptionResult.splice(i, 1);
        titleResult.splice(i, 1);
      }
    }

    if (descriptionResult.length > 0 || titleResult.length > 0) {
      setNotFound(false);
    }

    setSearchResults(descriptionResult);
    setSearchResultsTitle(titleResult);
  };
  */

  return <Search />;
}

export default App;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-verify',
  templateUrl: './age-verify.component.html',
  styleUrls: ['./age-verify.component.css']
})
export class AgeVerifyComponent implements OnInit {

  selMonth: string;

  output: string;

  month: number;
  selDay: number;
  selYear: number;

  optMonth = [
    { name: "Jan", value: 1 },
    { name: "Feb", value: 2 },
    { name: "Mar", value: 3 },
    { name: "Apr", value: 4 },
    { name: "May", value: 5 },
    { name: "Jun", value: 6 },
    { name: "Jul", value: 7 },
    { name: "Aug", value: 8 },
    { name: "Sep", value: 9 },
    { name: "Oct", value: 10 },
    { name: "Nov", value: 11 },
    { name: "Dec", value: 12 },
  ];

  optDay = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    { name: "11", value: 11 },
    { name: "12", value: 12 },
    { name: "13", value: 13 },
    { name: "14", value: 14 },
    { name: "15", value: 15 },
    { name: "16", value: 16 },
    { name: "17", value: 17 },
    { name: "18", value: 18 },
    { name: "19", value: 19 },
    { name: "20", value: 20 },
    { name: "21", value: 21 },
    { name: "22", value: 22 },
    { name: "23", value: 23 },
    { name: "24", value: 24 },
    { name: "25", value: 25 },
    { name: "26", value: 26 },
    { name: "27", value: 27 },
    { name: "28", value: 28 },
    { name: "29", value: 29 },
    { name: "30", value: 30 },
    { name: "31", value: 31 },
  ];

  optYear = [
    { name: "1900", value: 1900 },
    { name: "1901", value: 1901 },
    { name: "1902", value: 1902 },
    { name: "1903", value: 1903 },
    { name: "1904", value: 1904 },
    { name: "1905", value: 1905 },
    { name: "1906", value: 1906 },
    { name: "1907", value: 1907 },
    { name: "1908", value: 1908 },
    { name: "1909", value: 1909 },
    { name: "1910", value: 1910 },
    { name: "1911", value: 1911 },
    { name: "1912", value: 1912 },
    { name: "1913", value: 1913 },
    { name: "1914", value: 1914 },
    { name: "1915", value: 1915 },
    { name: "1916", value: 1916 },
    { name: "1917", value: 1917 },
    { name: "1918", value: 1918 },
    { name: "1919", value: 1919 },
    { name: "1920", value: 1920 },
    { name: "1921", value: 1921 },
    { name: "1922", value: 1922 },
    { name: "1923", value: 1923 },
    { name: "1924", value: 1924 },
    { name: "1925", value: 1925 },
    { name: "1926", value: 1926 },
    { name: "1927", value: 1927 },
    { name: "1928", value: 1928 },
    { name: "1929", value: 1929 },
    { name: "1930", value: 1930 },
    { name: "1931", value: 1931 },
    { name: "1932", value: 1932 },
    { name: "1933", value: 1933 },
    { name: "1934", value: 1934 },
    { name: "1935", value: 1935 },
    { name: "1936", value: 1936 },
    { name: "1937", value: 1937 },
    { name: "1938", value: 1938 },
    { name: "1939", value: 1939 },
    { name: "1940", value: 1940 },
    { name: "1941", value: 1941 },
    { name: "1942", value: 1942 },
    { name: "1943", value: 1943 },
    { name: "1944", value: 1944 },
    { name: "1945", value: 1945 },
    { name: "1946", value: 1946 },
    { name: "1947", value: 1947 },
    { name: "1948", value: 1948 },
    { name: "1949", value: 1949 },
    { name: "1950", value: 1950 },
    { name: "1951", value: 1951 },
    { name: "1952", value: 1952 },
    { name: "1953", value: 1953 },
    { name: "1954", value: 1954 },
    { name: "1955", value: 1955 },
    { name: "1956", value: 1956 },
    { name: "1957", value: 1957 },
    { name: "1958", value: 1958 },
    { name: "1959", value: 1959 },
    { name: "1960", value: 1960 },
    { name: "1961", value: 1961 },
    { name: "1962", value: 1962 },
    { name: "1963", value: 1963 },
    { name: "1964", value: 1964 },
    { name: "1965", value: 1965 },
    { name: "1966", value: 1966 },
    { name: "1967", value: 1967 },
    { name: "1968", value: 1968 },
    { name: "1969", value: 1969 },
    { name: "1970", value: 1970 },
    { name: "1971", value: 1971 },
    { name: "1972", value: 1972 },
    { name: "1973", value: 1973 },
    { name: "1974", value: 1974 },
    { name: "1975", value: 1975 },
    { name: "1976", value: 1976 },
    { name: "1977", value: 1977 },
    { name: "1978", value: 1978 },
    { name: "1979", value: 1979 },
    { name: "1980", value: 1980 },
    { name: "1981", value: 1981 },
    { name: "1982", value: 1982 },
    { name: "1983", value: 1983 },
    { name: "1984", value: 1984 },
    { name: "1985", value: 1985 },
    { name: "1986", value: 1986 },
    { name: "1987", value: 1987 },
    { name: "1988", value: 1988 },
    { name: "1989", value: 1989 },
    { name: "1990", value: 1990 },
    { name: "1991", value: 1991 },
    { name: "1992", value: 1992 },
    { name: "1993", value: 1993 },
    { name: "1994", value: 1994 },
    { name: "1995", value: 1995 },
    { name: "1996", value: 1996 },
    { name: "1997", value: 1997 },
    { name: "1998", value: 1998 },
    { name: "1999", value: 1999 },
    { name: "2000", value: 2000 },
    { name: "2001", value: 2001 },
    { name: "2002", value: 2002 },
    { name: "2003", value: 2003 },
    { name: "2004", value: 2004 },
    { name: "2005", value: 2005 },
    { name: "2006", value: 2006 },
    { name: "2007", value: 2007 },
    { name: "2008", value: 2008 },
    { name: "2009", value: 2009 },
    { name: "2010", value: 2010 },
    { name: "2011", value: 2011 },
    { name: "2012", value: 2012 },
    { name: "2013", value: 2013 },
    { name: "2014", value: 2014 },
    { name: "2015", value: 2015 },
    { name: "2016", value: 2016 },
    { name: "2017", value: 2017 },
    { name: "2018", value: 2018 },
    { name: "2019", value: 2019 },
    { name: "2020", value: 2020 },
  ];


  constructor() { }

  ngOnInit() {
    // for (var i = 1900; i <= 2020; i++) {
    //   console.log(`{name: "${i}", value: ${i}},`);
    // }
  }

  check() {
    switch (this.selMonth) {
      case "Jan":
        this.month = 1;
        break;

      case "Feb":
        this.month = 2;
        break;

      case "Mar":
        this.month = 3;
        break;

      case "Apr":
        this.month = 4;
        break;

      case "May":
        this.month = 5;
        break;

      case "Jun":
        this.month = 6;
        break;

      case "Jul":
        this.month = 7;
        break;

      case "Aug":
        this.month = 8;
        break;

      case "Sep":
        this.month = 9;
        break;

      case "Oct":
        this.month = 10;
        break;

      case "Nov":
        this.month = 11;
        break;

      case "Dec":
        this.month = 12;
        break;

      default:
        this.month = 0;
        break;
    }

    if (this.month > 0 && this.month <= 12 && this.selDay > 0 && this.selDay <= 31 && this.selYear > 0 && this.selYear < 2020) {

    }
    else {

    }
  }

}

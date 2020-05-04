import React from "react";
import './style.css';
import brand from './images/brand.svg';
import records from './images/records.svg';
import customizable from './images/customizable.svg';
import Highlight from "../Highlight";

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            shortLinks: [],
            isFormLoading: false
        };
        this.setSearchText = this.setSearchText.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.copyShortLink = this.copyShortLink.bind(this);
    }
    setSearchText(event) {
        this.setState({ searchText: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.validateAndProcess();
    }
    async validateAndProcess() {
        const searchInput = document.getElementById('searchText');
        const warning = document.getElementById('warning');
        if (!this.state.searchText) {
            searchInput.classList.add('red');
            warning.classList.add('show');
            warning.innerHTML = 'Please enter a URL';
        } else if (!this.validURL(this.state.searchText)) {
            searchInput.classList.add('red');
            warning.classList.add('show');
            warning.innerHTML = 'Please enter valid URL';
        } else {
            this.setState({ isFormLoading: true });
            const response = await this.getShortUrl(this.state.searchText);
            this.setState({ isFormLoading: false });
            
            if(!Array.isArray(response.url)) {
                searchInput.classList.remove('red');
                warning.classList.remove('show');
                warning.innerHTML = 'Please enter a URL';
                this.saveReponse(response);
            } else {
                // Received error. Show same in UI
                warning.innerHTML = response.url[0];
            }
        }
    }
    validURL(str) {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }
    async getShortUrl(url) {
        const baseURL = 'https://rel.ink/api/links/';
        const result = await fetch(baseURL, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url }) });
        return result.json();
    }
    saveReponse(data) {
        this.setState({ shortLinks: [...this.state.shortLinks, data] });
        console.log('After saving state ', this.state.shortLinks);
    }
    copyShortLink(event) {
        event.preventDefault();
        const dataToCopy = document.getElementById('copyLink').value;
        const el = document.createElement('textarea');
        el.value = dataToCopy;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        event.target.classList.add('copied');
        event.target.innerHTML = 'Copied';
    }
    render() {
        return (
            <div>
                <div className="action-wrapper c-padding">
                    <div className="violet-area">
                        <form className="form" onSubmit={this.onFormSubmit}>
                            <div className="input mb">
                                <input type="text" value={this.searchText} onChange={this.setSearchText} placeholder="Shorten a link here" name="searchText" id="searchText" />
                                <div className="warning" id="warning">Please enter a link</div>
                            </div>
                            <div className="input">
                                <input type="submit" disabled={this.state.isFormLoading} className="cyan-btn submit-btn" value={this.state.isFormLoading ? 'Shortening!' : 'Shorten it!'} />
                            </div>
                        </form>
                    </div>
                    { this.state.shortLinks.map((item,index) => {
                        return(
                            <div className="white-area" key={index}>
                                <div className="main-link">{item.url}</div>
                                <div className="short-link">
                                <div className="link">https://rel.ink/{item.hashid}</div>
                                <input readOnly type="text" className="hidden" id="copyLink" value={ 'https://rel.ink/' + item.hashid }/>
                                    <button onClick={this.copyShortLink} className="cyan-btn copy-btn">Copy</button>
                                </div>
                            </div>
                        );
                    }) }
                    <div className="highlight-heading">
                        <div className="heading">Advanced Statistics</div>
                        <div className="desc">Track how your links are performing across the web with our advanced statistics dashboard.</div>
                    </div>
                    <div className="three-points">
                        <div className="point">
                            <div className="image"><img src={brand} alt="" className="point-img" /></div>
                            <div className="title">Brand Recognition</div>
                            <div className="content">
                                Boost your brands recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                        </div>
                        </div>
                        <div className="point">
                            <div className="image"><img src={records} alt="" className="point-img" /></div>
                            <div className="title">Detailed Records</div>
                            <div className="content">
                                Boost your brands recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                        </div>
                        </div>
                        <div className="point">
                            <div className="image"><img src={customizable} alt="" className="point-img" /></div>
                            <div className="title">Fully Customizable</div>
                            <div className="content">
                                Boost your brands recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                        </div>
                        </div>
                    </div>
                </div>
                <Highlight />
            </div>
        );
    }
}

export default Action;
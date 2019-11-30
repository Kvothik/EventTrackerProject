package com.skilldistillery.eventtracker.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Beer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String style;
	private double abv;
	
	@Column(name = "img_url")
	private String imgUrl;
	private String brewrey;
	private int ibu;
	
	@JsonIgnore
	@OneToMany(mappedBy = "beer")
	private List<UserBeer> userBeers;

	public List<UserBeer> getUserBeers() {
		return userBeers;
	}

	public void setUserBeers(List<UserBeer> userBeers) {
		this.userBeers = userBeers;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public double getAbv() {
		return abv;
	}

	public void setAbv(double abv) {
		this.abv = abv;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getBrewrey() {
		return brewrey;
	}

	public void setBrewrey(String brewrey) {
		this.brewrey = brewrey;
	}

	public int getIbu() {
		return ibu;
	}

	public void setIbu(int ibu) {
		this.ibu = ibu;
	}

	public Beer(String name, String style, double abv, String imgUrl, String brewrey, int ibu) {
		super();
		this.name = name;
		this.style = style;
		this.abv = abv;
		this.imgUrl = imgUrl;
		this.brewrey = brewrey;
		this.ibu = ibu;
	}

	public Beer() {
		super();
	}

	@Override
	public String toString() {
		return "Beer [id=" + id + ", name=" + name + ", style=" + style + ", abv=" + abv + ", imgUrl=" + imgUrl
				+ ", brewrey=" + brewrey + ", ibu=" + ibu + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(abv);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((brewrey == null) ? 0 : brewrey.hashCode());
		result = prime * result + ibu;
		result = prime * result + id;
		result = prime * result + ((imgUrl == null) ? 0 : imgUrl.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((style == null) ? 0 : style.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Beer other = (Beer) obj;
		if (Double.doubleToLongBits(abv) != Double.doubleToLongBits(other.abv))
			return false;
		if (brewrey == null) {
			if (other.brewrey != null)
				return false;
		} else if (!brewrey.equals(other.brewrey))
			return false;
		if (ibu != other.ibu)
			return false;
		if (id != other.id)
			return false;
		if (imgUrl == null) {
			if (other.imgUrl != null)
				return false;
		} else if (!imgUrl.equals(other.imgUrl))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (style == null) {
			if (other.style != null)
				return false;
		} else if (!style.equals(other.style))
			return false;
		return true;
	}

}

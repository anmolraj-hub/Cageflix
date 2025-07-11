package com.cageflix.backend.model;

import java.io.Serializable;
import java.util.Objects;

public class TitlePrincipalId implements Serializable {

    private String tconst;
    private String nconst;

    public TitlePrincipalId() {}

    public TitlePrincipalId(String tconst, String nconst) {
        this.tconst = tconst;
        this.nconst = nconst;
    }

    // getters and setters

    public String getTconst() {
        return tconst;
    }

    public void setTconst(String tconst) {
        this.tconst = tconst;
    }

    public String getNconst() {
        return nconst;
    }

    public void setNconst(String nconst) {
        this.nconst = nconst;
    }

    // IMPORTANT: must implement equals() and hashCode()

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TitlePrincipalId)) return false;
        TitlePrincipalId that = (TitlePrincipalId) o;
        return Objects.equals(tconst, that.tconst) &&
               Objects.equals(nconst, that.nconst);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tconst, nconst);
    }
}
